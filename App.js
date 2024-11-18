// import React from 'react';
// import { StatusBar, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
//
// const datasource = [
//       {key: 'a'},
//       {key: 'b'},
//       {key: 'c'},
//       {key: 'd'},
//       {key: 'e'},
//       {key: 'f'},
//       {key: 'g'},
//       {key: 'h'},
//       {key: 'i'},
//       {key: 'j'},
//       {key: 'k'},
//       {key: 'l'},
//       {key: 'm'},
//       {key: 'n'},
//       {key: 'o'},
//       {key: 'p'},
//       {key: 'q'},
//       {key: 'r'},
//       {key: 's'},
//       {key: 't'},
// ]
//
//
// const App = () => {
//   return (
//       <View>
//         {/*<StatusBar hidden={true}/>*/}
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//
//         />
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
// });
//
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// export default App;

// Exercise 2
import React from 'react';
import { StatusBar, StyleSheet, Text, View,SectionList, TouchableOpacity } from 'react-native';

const datasource = [
  {
    data: [{key: 'a'}, {key:'e'}, {key:'o'}, {key:'u'}],
    title: 'Vowels', bgcolor: "skyblue"
  },
  {
    data: [
      {key: 'a'},
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'e'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'i'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'o'},
      {key: 'p'},
      {key: 'q'},
      {key: 'r'},
      {key: 's'},
      {key: 't'},
    ],
    title: 'Consonants', bgcolor: "khaki"
  },
];

const App = () => {
  return (
      <View>
        {/*<StatusBar hidden={true}/>*/}
        <SectionList contentContainerStyle={{padding:10}}
                     sections={datasource}
                     renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgcolor}}) => (
                         <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
                           {title}
                         </Text>
                     )}


        />
      </View>
  );
};

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText: {
    fontsize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});


const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

export default App;


