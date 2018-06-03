import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import SectionApi from '../../services/SectionApi';

class MyMap extends React.Component {
  krugovi = [];
  circleOptions={	
    strokeColor: '#4c4cff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b2b2ff',
    fillOpacity: 0.65,
  }
  notActiveCircleOptions={	
    strokeColor: '#A0A0A0',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#E0E0E0',
    fillOpacity: 0.65,
  }
    constructor (props) {
      super(props);
      this.loadSections = this.loadSections.bind(this);

      this.state = {
        isMapReady: false,
        region: {
          latitude: 43.843151,
          longitude: 18.339907,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2
        }
        
      }
      this.loadSections() .then((data) => {
        
          var circleoptions = null;
          this.krugovi = [];
           for ( let city of data ) {
             if(city.active === true)
               circleoptions=this.circleOptions;
             else
               circleoptions=this.notActiveCircleOptions;
    
               
           this.krugovi.push(
             <Circle
              key={city._id}
              center={{latitude: city.lat,longitude: city.lng}}
              radius= {Math.sqrt(city.population) * 100}
              strokeColor = {circleoptions.strokeColor}
              fillColor = {circleoptions.fillColor}
            />);
             
      }
      
        }).catch((error)=>{
         console.log({"pipes":"Api call error"});
         alert(error.message);
        });
    }
  
    onMapLayout = () => {
      this.setState({ isMapReady: true });
    }
    async loadSections() {
      let data = await SectionApi.GetSections();
      return data;
    } 
  
    render () {
      return (
        <View style={styles.container}>
          <MapView
            onPress={e => console.log(e.nativeEvent)}
            style={styles.map}
            provider='google'
            mapType='standard'
            showsScale
            showsCompass
            showsPointsOfInterest
            showsBuildings
            region={this.state.region}
            onLayout={this.onMapLayout}
          >
          {this.props.pipes}
          {this.krugovi}
       </MapView>
       </View>
      )
    }
  
  }



const styles = {

    container: {
       
        backgroundColor: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex:1
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: '#59656C',
        marginBottom: 10,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
};
export default MyMap;