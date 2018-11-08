import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {

  render() {
    const { people } = this.props.navigation.state.params;
/*    const people = {  
         "gender":"female",
         "name":{  
            "title":"ms",
            "first":"marialda",
            "last":"da rocha"
         },
         "location":{  
            "street":"8434 rua dezenove de outubro",
            "city":"chapecó",
            "state":"santa catarina",
            "postcode":39420,
            "coordinates":{  
               "latitude":"-72.9158",
               "longitude":"173.6300"
            },
            "timezone":{  
               "offset":"+3:30",
               "description":"Tehran"
            }
         },
         "email":"marialda.darocha@example.com",
         "login":{  
            "uuid":"a5e9d43d-56de-46c8-a691-6e2dff46bce1",
            "username":"beautifulgorilla931",
            "password":"madmax",
            "salt":"xZ3yVI4A",
            "md5":"08b427421b0f7415961167ad308a8e9c",
            "sha1":"a0120203ddf11a30cffc0e3e55a475e23efdbf32",
            "sha256":"d7873b87f2ad2c7f855e69aa19721bacc0915824ffa61bc6121e90e68a51186f"
         },
         "dob":{  
            "date":"1952-08-11T02:42:39Z",
            "age":66
         },
         "registered":{  
            "date":"2016-03-13T17:54:42Z",
            "age":2
         },
         "phone":"(92) 4779-1957",
         "cell":"(11) 9768-2566",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/93.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/93.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/93.jpg"
         },
         "nat":"BR"
      };*/

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: people.picture.large}}  />
        <View style={styles.detailContainer}>
          <Line label="Email:" content={people.email} />
          <Line label="Cidade:" content={people.location.city} />
          <Line label="Estado:" content={people.location.state} />
          <Line label="Tel:" content={people.phone} />
          <Line label="Cel:" content={people.cell} />
          <Line label="Nacionalidade:" content={people.nat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  }
})