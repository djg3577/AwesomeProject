import { useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useGlobalData } from '../GlobalDataContext';

const SearchingForFood = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [foodNutrients, setFoodNutrients] = useState(null);
  const [calories, setCalories] = useState(0);
  const [possibleNutrients, setPossibleNutrients] = useState([]);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
const [protein, setProtein] = useState(0);
const { addFoodToGlobals, globalProtein, globalFat, globalCarbs, globalCalories } = useGlobalData();
const navigation = useNavigation();


  const handleSearch = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'x-app-id': 'd0ca6f4a',
      'x-app-key': 'ae722a3dc06e7279d3ce987c2cab1aaf',
    };

    const queryParams = new URLSearchParams({
      query: searchQuery,
      branded: 'true',
      branded_region: '1',
    });

    const url = `https://trackapi.nutritionix.com/v2/search/instant?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      const data = await response.json();
      setSearchResults(data.common);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFoodSelect = async (food) => {
    setSelectedFood(food);

    const headers = {
      'Content-Type': 'application/json',
      'x-app-id': 'd0ca6f4a',
      'x-app-key': 'ae722a3dc06e7279d3ce987c2cab1aaf',
    };

    const requestBody = {
      query: food.food_name,
      timezone: 'US/Eastern',
    };

    try {
      const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      const extractedCalories = Math.round(data.foods[0].nf_calories);
      const extractedFat = Math.round(data.foods[0].nf_total_fat);
      const extractedProtein = Math.round(data.foods[0].nf_protein);
      const extractedCarbs = Math.round(data.foods[0].nf_total_carbohydrate);
      setCalories(extractedCalories);
      setFat(extractedFat); // Store fat value
      setProtein(extractedProtein); // Store protein value
      setCarbs(extractedCarbs);
      setFoodNutrients(data.foods[0].nf);
    } catch (error) {
      console.error('Error fetching nutrient data:', error);
    }
  };
  useEffect(() => {
    const fetchPossibleNutrients = async () => {
      const headers = {
        'Content-Type': 'application/json',
        'x-app-id': 'd0ca6f4a',
        'x-app-key': 'ae722a3dc06e7279d3ce987c2cab1aaf',
      };

      try {
        const response = await fetch('https://trackapi.nutritionix.com/v2/utils/nutrients', {
          method: 'GET',
          headers: headers,
        });

        const data = await response.json();
        setPossibleNutrients(data);
      } catch (error) {
        console.error('Error fetching possible nutrients:', error);
      }
    };

    fetchPossibleNutrients();
  }, []);



  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter food name"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onEndEditing={handleSearch}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem} onPress={() => handleFoodSelect(item)}>
            <Text>{item.food_name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.food_name}
      />
      {selectedFood && (
        <View style={styles.selectedFoodContainer}>
          <Text>Selected Food: {selectedFood.food_name}</Text>
          {/* Display extracted calories, fat, and protein values */}
          <Text>Extracted Calories: {calories}</Text>
          <Text>Fat: {fat}</Text>
          <Text>Protein: {protein}</Text>
          <Text>Carbs: {carbs}</Text>
          <TouchableOpacity onPress={() => addFoodToGlobals(protein, fat, carbs,calories)}>
            <Text>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Go back to HomeScreen</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* ... Other components */}
      {/* Display global protein, fat, and calories */}
      <Text>Global Protein: {globalProtein}</Text>
      <Text>Global Fat: {globalFat}</Text>
      <Text>Global Carbs: {globalCarbs}</Text>
      <Text>Global Calories: {globalCalories}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  resultItem: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedFoodContainer: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default SearchingForFood;