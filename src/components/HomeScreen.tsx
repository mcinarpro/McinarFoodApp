import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/colors';
import categories from '../assets/data/categories';
import popular from '../assets/data/popular';

const HomeScreen = () => {
  const renderCategoryItem = ({item}: any) => {
    return (
      <View
        style={[
          styles.categoryItem,
          {
            backgroundColor: item.selected ? Colors.primary : Colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image style={styles.categoryItemImage} source={item.image} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categoryItemSelect,
            {
              backgroundColor: item.selected ? Colors.white : Colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={12}
            color={item.selected ? Colors.black : Colors.white}
            style={styles.categoryItemIcon}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehaviour="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.header}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={32} color={Colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titles}>
          <Text style={styles.subtitle}>Food</Text>
          <Text style={styles.title}>Delivery</Text>
        </View>

        {/* SearchBar */}
        <View style={styles.searchBar}>
          <Feather name="search" size={16} color={Colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesList}>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item: any) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popular}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popular.map(item => (
            <View
              key={item.id}
              style={[
                styles.popularCard,
                {
                  marginTop: item.id === '1' ? 10 : 20,
                },
              ]}>
              <View>
                <View>
                  <View style={styles.popularTop}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={Colors.primary}
                    />
                    <Text style={styles.popularTopText}>top of the week</Text>
                  </View>

                  <View style={styles.popularTitles}>
                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight {item.weight}
                    </Text>
                  </View>
                </View>

                <View style={styles.popularBottom}>
                  <View style={styles.addButton}>
                    <Feather name="plus" size={10} color={Colors.textDark} />
                  </View>
                  <View style={styles.rating}>
                    <MaterialCommunityIcons
                      name="star"
                      size={10}
                      color={Colors.textDark}
                    />
                    <Text style={styles.ratingtext}>{item.rating}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.popularRight}>
                <Image style={styles.popularRightImage} source={item.image} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titles: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: Colors.textDark,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: Colors.textDark,
    marginTop: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: Colors.text,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: Colors.text,
  },
  categories: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
    color: Colors.textDark,
  },
  categoriesList: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItem: {
    backgroundColor: Colors.primary,
    marginRight: 20,
    borderRadius: 20,
    padding: 12,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: Colors.textDark,
    marginTop: 10,
  },
  categoryItemSelect: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 50,
    marginBottom: 20,
  },
  categoryItemIcon: {
    alignSelf: 'center',
  },
  popular: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: Colors.textDark,
  },
  popularCard: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: Colors.textDark,
  },
  popularTitles: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: Colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: Colors.text,
    marginTop: 5,
  },
  popularBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  ratingtext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: Colors.textDark,
    marginLeft: 5,
  },
  popularRight: {
    marginLeft: 40,
  },
  popularRightImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
