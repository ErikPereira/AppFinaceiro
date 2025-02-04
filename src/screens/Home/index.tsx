import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Bookmark from '../../assets/Bookmark.svg';
import meuStorys from '../../assets/meuStory.png';
import imagemNoFim from '../../assets/noFim.png';
import imagemEntregue from '../../assets/entregue.png';
import imagemMusica from '../../assets/musica.png';
import foto from '../../assets/foto.png';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';
import foto4 from '../../assets/foto4.png';
import Heart from "../../assets/Heart.svg";
import Share from "../../assets/Share.svg";
import Comment from "../../assets/Comment.svg";
import image from "../../assets/image.png";
import Logo from '../../assets/logo.svg';
import Message from '../../assets/message.svg';
import Stroke from '../../assets/stroke.svg'
import Points from '../../assets/points.svg'
import styles from './styles'


const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: meuStorys,
        name: "Seu story"
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
        name: "Ana"
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
        name: "Vitoria"
        
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
        name: "Vitor"
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4,
        name: "Rebeca"
    },{
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
        name: "Ana"
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
        name: "Vitoria"
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
        name: "Vitor"
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4,
        name: "Rebeca"
    },
]

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <View style={styles.headerOptions}>
                    <Stroke />
                    <Message />
                </View>
            </View>

            <ScrollView style={styles.scrollView}>

                <View style={styles.stories}>
                    <FlatList 
                        horizontal={true}
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={ (item) => (
                            <View>
                                <View style={styles.storiesCard} key={item.item.id}>
                                    <Image style={styles.storiesCardImage} source={item.item.photoURL}/>
                                </View>
                                <View>
                                    <Text style={styles.storiesCardName}> {item.item.name}</Text>
                                </View>
                            </View>
                            
                        )}
                    />    
                </View>

                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <View style={styles.contentHeaderLeft}>
                            <Image source={foto} style={styles.contentHeaderLeftImage}/>
                            <Text style={styles.contentHeaderLeftText}>
                                Ana
                            </Text>
                        </View>
                        <Points />
                    </View>
                    <View style={styles.contentImage}>
                    <View style={styles.contentImage}>
                        <Image style={styles.contentImage} source={imagemNoFim} />
                    </View>
                    </View>

                    <View style={styles.contentFooter}>
                        <View style={styles.contentFooterOptions}>
                            <View style={styles.contentFooterOptionsButton}>
                                <Heart />
                                <Comment />
                                <Share />
                            </View>
                            <Bookmark/>
                        </View>
                        
                        <View style={styles.contentFooterViewText}>
                            <Text style={styles.contentFooterText1}>Não existe vida com Deus longe da presença de Deus não existe viver perto </Text>
                            <Text style={styles.contentFooterText2}>View all 3 comments </Text>
                            <Text style={styles.contentFooterText3}>3 hours ago See Translation </Text>
                        </View>

                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <View style={styles.contentHeaderLeft}>
                            <Image source={foto3} style={styles.contentHeaderLeftImage}/>
                            <Text style={styles.contentHeaderLeftText}>
                                Vitor
                            </Text>
                        </View>
                        <Points />
                    </View>
                    <View style={styles.contentImage}>
                        <Image style={styles.contentImage} source={imagemEntregue} />
                    </View>

                    <View style={styles.contentFooter}>
                        <View style={styles.contentFooterOptions}>
                            <View style={styles.contentFooterOptionsButton}>
                                <Heart />
                                <Comment />
                                <Share />
                            </View>
                            <Bookmark/>
                        </View>
                        
                        <View style={styles.contentFooterViewText}>
                            <Text style={styles.contentFooterText1}>Viver como um discípulo de Jesus, se nós vivemos longe da oração e da palavra seria muito estranho alguém</Text>
                            <Text style={styles.contentFooterText2}>View all 3 comments </Text>
                            <Text style={styles.contentFooterText3}>3 hours ago See Translation </Text>
                        </View>

                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <View style={styles.contentHeaderLeft}>
                            <Image source={foto4} style={styles.contentHeaderLeftImage}/>
                            <Text style={styles.contentHeaderLeftText}>
                              Rebeca
                            </Text>
                        </View>
                        <Points />
                    </View>
                    <View style={styles.contentImage}>
                        <Image style={styles.contentImage} source={imagemMusica} />
                    </View>

                    <View style={styles.contentFooter}>
                        <View style={styles.contentFooterOptions}>
                            <View style={styles.contentFooterOptionsButton}>
                                <Heart />
                                <Comment />
                                <Share />
                            </View>
                            <Bookmark/>
                        </View>
                        
                        <View style={styles.contentFooterViewText}>
                            <Text style={styles.contentFooterText1}>Vamos louvar a Deus juntos hoje 🤗</Text>
                            <Text style={styles.contentFooterText2}>View all 3 comments </Text>
                            <Text style={styles.contentFooterText3}>3 hours ago See Translation </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//   },
//   header: {
//     marginTop: 40,
//     paddingHorizontal: 10,
//     width: "100%",
//     height: 56,
//     alignItems: "center",
//     justifyContent: "space-between",
//     flexDirection: "row"
//   },
//   scrollView: {
//     width: "100%",
//   },
//   headerOptions: {
//     alignItems: "center",
//     flexDirection: "row",
//     gap: 10,
//   },
//   stories: {
//     width: "100%",
//     paddingLeft: 10,
//     paddingVertical: 10,
//     alignContent: "center",
//   },
//   storiesCard: {
//     borderWidth: 2,
//     borderColor: "#F7B55A",
//     borderRadius: 50,
//     marginRight: 14,
//     padding: 2
//   },
//   storiesCardImage: {
//     width: 64,
//     height: 64,
//   },
//   storiesCardName: {
//     color: "#fff",
//     paddingLeft: 10,
//   },
//   content: {
//     width: "100%",
//     marginBottom: 10,
//   },
//   contentHeader: {
//     height: 80,
//     alignItems: "center",
//     justifyContent: "space-between",
//     flexDirection: "row",
//     paddingHorizontal: 10,
//   },
//   contentHeaderLeft: {
//     height: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   contentHeaderLeftImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   contentHeaderLeftText: {
//     color: "#fff",
//   },
//   contentImage: {
//     width: "100%",
//     height: 355,
//   },
//   contentFooter: {
//     width: "100%",
//     paddingHorizontal: 10,
//   },
//   contentFooterOptions: {
//     height: 40,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",  
//   },
//   contentFooterOptionsButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   contentFooterViewText: {
//     marginTop: 10,
//     gap: 10,
//     paddingLeft: 15
//   },
//   contentFooterText1: {
//     color: "#FFF"
//   },
//   contentFooterText2: {
//     color: "#FFF"
//   },
//   contentFooterText3: {
//     color: "#FFF",
//     fontSize: 10,
//   },
// });


