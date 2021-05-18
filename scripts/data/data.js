let sectionDetails = {
    "abstract": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'abstract-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            innerText: 'Abstract',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'Societal interest in gaining access to immediate, accurate, and predicted air quality information has increased significantly. The goal of this article is to explore the opportunity for a novel air quality application for the general public. This is done through a complete User Experience (UX) Research and Design project. The research phase consists of firstly unmasking the current global landscape for such a product, exploring paths taken by existing and similar products, and collecting a set of potential requirements based on this initial research. The design phase consists of firmly supporting core requirements, carrying out a real world and conceptual design exploration followed by iterative interlocking stages of prototyping and testing from the low-fidelity to the high-fidelity prototypes.',
                }
            }
        }
    },
    "research": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'research-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            innerText: 'Research',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'In order to carry out pertinent research, a broader understanding of the current landscape of air quality applications is required. This section explores three key elements: the general public sentiment, the availability of pertinent data, and the compatibility of such data for a global scale.',
                },
                2: {
                    type: 'div',
                    className: 'sectionContent',
                    id: 'research-content',
                    children: {
                        0: {
                            type: 'h4',
                            className: 'sectionSubSubTitle',
                            id: 'societyInterest-subSubTitle',
                            innerText: 'Society Interest',
                        },
                        1: {
                            type: 'p',
                            className: 'sectionParagraph',
                            innerText: 'Air quality can be calculated in a number of ways, and a number of locations. Professionally, air quality has been explored by building experts in order to ensure a large number of people can safely coexist in a given space. As seen by relatively recent cases of asbestos in buildings (leading to pollutant, even cancerous air), air quality hasn\'t been seriously and universally considered or even understood until recently.\n' +
                                '\n' +
                                'With a better understanding of dangerous particles in the air for humans, society has gained an interest in improving the health of individuals through direct actions to reduce the level of pollutants in our air. In a capitalist world, commercial and industrial interest usually drives innovation. This was indeed the case here, and was supplemented by governmental initiatives to reduce the presence of scientifically proven cancerougous elements.\n' +
                                '\n' +
                                'Another avenue is the increase in urban migration, in part leading to an increase in pollutants in populated areas. This has even led to extreme cases visual indicators of poor air quality levels as can be seen in the image 1 below.'
                        },
                        2: {
                            type: 'div',
                            className: 'img-container flex-v',
                            id: 'societyInterest-img-container',
                            children: {
                                0: {
                                    type: 'img',
                                    className: 'domImg',
                                    id: 'societyInterest-img',
                                    src: 'media/images/beijing_air_pollution.jpeg',
                                    alt: 'Photo of skyscrapers and highway in Beijing covered by a thick smog.'
                                },
                                1: {
                                    type: 'p',
                                    className: 'img-caption',
                                    id: 'societyInterest-img-caption',
                                    innerText: 'Image 1 : Poor air quality in the city of Beijing, China. Source: BBC/AFP.'
                                }
                            }
                        },
                        3: {
                            type: 'p',
                            className: 'sectionParagraph',
                            innerText: 'As it became more socially known, air quality became a hot topic for individuals and governmental institutions alike. This led to the increase in data collection of different pollutants across the globe.'
                        },
                        4: {
                            type: 'h4',
                            className: 'sectionSubSubTitle',
                            id: 'dataAvailability-subSubTitle',
                            innerText: 'Data Availability',
                        },
                        5: {
                            type: 'p',
                            className: 'sectionParagraph',
                            innerText: 'In the early years, data on key pollutants was not regularly collected across the world. The availability of hyper localized data wasn\'t even an option as national statistics were only a broad estimate.\n' +
                                '\n' +
                                'This is where the journey of air quality metrics starts to align with that of weather metrics. Weather applications were initially only of great concern to the industrial sector, and only gained popularity truly when national and international transport through air became a commonality. This led to the need for accurate and reliable weather information and even forecasts for regions to ensure safe travel. Once these commercial challenges were addressed, the technology could be miniaturized and its accuracy increased to allow for more locational sensitive measurement (i.e. going from satellite and high altitude weather stations to localised street level ministations).\n' +
                                '\n' +
                                'As it stands today, the availability of air quality data has exponentially increased. There are over 300 dedicated stations across the UK, with many of these becoming micro stations placed directly on the street to get hyper localised data.',
                        },
                        6: {
                            type: 'h4',
                            className: 'sectionSubSubTitle',
                            id: 'compatibility-subSubTitle',
                            innerText: 'Compatibility',
                        },
                        7: {
                            type: 'p',
                            className: 'sectionParagraph',
                            innerText: 'As is the case with many novel data collection initiatives, different entities implemented different strategies. These diverging practices are not an issue when a few key players employ them and the need for cross communication is not high. However, as more nations and institutions were wanting to gain access to accurate data regarding key pollutants, this became more of a hurdle.\n' +
                                '\n' +
                                'There are currently 11 different national measurements by nations such as Canada, Mexico, Singapore, Europe and the United States. While this is a great indicator of serious undertaking by major countries to better track and monitor pollutants, it means that cross-country cooperation is hindered by the need to translate measurements for useful comparison. Another issue that arises is that each nation has an interest in having low air quality levels, which may lead to them creating a system that skews the data.\n' +
                                '\n' +
                                'All these are elements that would be fixed by having an international measurement unit. Ensuring compatibility, transparency, and global historical data would be beneficial for all people across the globe.',
                        },
                        8: {
                            type: 'h3',
                            className: 'sectionSubTitle',
                            innerText: 'Research Summary',
                        },
                        9: {
                            type: 'p',
                            className: 'sectionParagraph',
                            innerText: 'In summary, we have seen how society has gained a bigger understanding and interest in air quality. Both governments and institutions have led the push to increase the availability and accuracy of data across the world, although differences in measurements still exist.\n' +
                                'The similarities of air quality applications with weather applications has been uncovered and should continue to be a pillar of exploration in this project.\n' +
                                '\n' +
                                'Pollutants high up in the atmosphere affect individuals at a different level than those on street level. This is where micro-stations, previously mentioned, placed directly on the street level, are highly beneficial. These micro-stations (see Figure 2) paired with larger infrastructures allow for a greater accuracy for day to day use by the general public, as well as greater reliability for national entities'
                        },
                        10: {
                            type: 'div',
                            className: 'img-container flex-v',
                            id: 'researchSummary-img-container',
                            children: {
                                0: {
                                    type: 'img',
                                    className: 'domImg',
                                    id: 'researchSummary-img',
                                    src: 'media/images/air_pollution_micro-station.jpeg',
                                    alt: 'Photo of a air quality micro station on the pavement, with a brick 4 story building on the right on the other side of the street, a bike against the railing and a person crossing the street.'
                                },
                                1: {
                                    type: 'p',
                                    className: 'img-caption',
                                    id: 'researchSummary-img-caption',
                                    innerText: 'Image 2 : Micro station in central London, Shaftesbury Avenue. Source: Panoramio by N19±.'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "featureExDef": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'featureExDef-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            innerText: 'Features: Exploration & Definition',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'A better understanding of the broader landscape for air quality leads to an exploration into what features can be implemented into a potential solution. This stage consists of a deeper dive into the similarities and differences between weather and air quality applications to understand what has currently been accomplished and how that may aid in this project. This leads into the second phase of exploring specifically features that are to make up the core and additional requirements of a potential product.',
                },
                2: {
                    type: 'div',
                    className: 'sectionContent',
                    id: 'featureExDef-content',
                    children: {
                        0: {
                            type: 'div',
                            className: 'featureExDef-mainContent',
                            children: {
                                0: {
                                    type: 'h3',
                                    className: 'sectionSubTitle',
                                    innerText: 'Feature Exploration'
                                },
                                1: {
                                    type: 'h4',
                                    className: 'sectionSubSubTitle',
                                    id: 'featureExDef-subSubTitle',
                                    innerText: 'Weather & Air Quality Applications'
                                },
                                2: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'In the initial research phase, it was quickly uncovered that both weather and air quality applications share many similarities. This suscitated a deeper level analysis to understand why that was the case. Weather data collection was found to have a similar journey to air quality as explored in the above section. In brief, global data for weather was not initially standardised. Initially, specific industries were most in need of accurate weather data (maritime navigation, air navigation to name a few) which helped drive progress in the technology, standardisation and locational accuracy. With this increase in data availability, the global population gained an interest in having access to hyper-localised data for everyday use.\n' +
                                        '\n' +
                                        'Similarities also exist in the opportunity of data manipulation. These include people\'s interest in hyper localized data. The interest in learning of the condition in different locations. The ability to view forecasts in the coming days and even hours, when possible. As we’ll see, these are elements that have been mostly mastered by weather applications but remain challenging for air quality given its relative infancy.'
                                },
                                3: {
                                    type: 'h4',
                                    className: 'sectionSubSubTitle',
                                    id: 'featureExDef-subSubTitle',
                                    innerText: 'Similarities & Differences',
                                },
                                4: {
                                    type: 'div',
                                    className: 'table-container',
                                    id: 'simDiff-table-container',
                                },
                                5: {
                                    type: 'h3',
                                    className: 'sectionSubTitle',
                                    innerText: 'Feature Definition'
                                },
                                6: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'This section first looks at physical products that currently dominate the market space, looks at the visibility of available air quality data as a starting point for feature definition. From there, the architecture of the app is explored, which consists of first defining a set of requirements that can then be mapped out on diagrams to gain a better visual understanding of the way different components will interact with each other and how the user will navigate across the product.'
                                },
                                7: {
                                    type: 'h4',
                                    className: 'sectionSubSubTitle',
                                    id: 'featureExDef-subSubTitle',
                                    innerText: 'Existing Product Review'
                                },
                                8: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'It is often natural instinct to jump into a project blinded by all existing work with the aim of creating something novel and devoid of any past bias. However, renowned psychologists argue that nobody is devoid of any bias, and in any way that approach would do little more than reinvent the wheel and likely fall into many pitfalls that past projects have uncovered and overcome. As such, a review of existing products is necessary to understand the current state-of-the-art, make use of recognisable elements and see what shortfalls may be improved. The products explored as part of this process included Accuweather.com, Air Visual mobile app, and ________.'
                                },
                                9: {
                                    type: 'h5',
                                    className: 'sectionSubSubSubTitle',
                                    innerText: 'Accuweather'
                                },
                                10: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: ''
                                },
                                11: {
                                    type: 'h5',
                                    className: 'sectionSubSubSubTitle',
                                    innerText: 'Air Visual'
                                },
                                12: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: ''
                                },
                                13: {
                                    type: 'h5',
                                    className: 'sectionSubSubSubTitle',
                                    innerText: '______'
                                },
                                14: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: ''
                                },
                                15: {
                                    type: 'h4',
                                    className: 'featureExDef-subSubTitle',
                                    innerText: 'API Research'
                                },
                                16: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'Wanting to create the unattainable is often the bane of a designer. While imagination aids in driving technological advancements, one must consider the viability of a proposed design to ensure its success. With that in mind, this section looks at the work done to explore potential data sources to understand their capabilities and limitations. This is a vital spot into being able to define accurate requirements based on what is currently available.'
                                },
                                17: {
                                    type: 'h5',
                                    className: 'sectionSubSubSubTitle',
                                    innerText: 'IQAir - Air Visual API'
                                },
                                18: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: ''
                                },
                                19: {
                                    type: 'h5',
                                    className: 'sectionSubSubSubTitle',
                                    innerText: 'Air Quality Open Data Platform'
                                },
                                20: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: ''
                                },
                                21: {
                                    type: 'h5',
                                    className: 'sectionSubSubSubTitle',
                                    innerText: 'Other Options'
                                },
                                22: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: ''
                                },
                                23: {
                                    type: 'h4',
                                    className: 'sectionSubSubTitle',
                                    id: 'featureExDef-subSubTitle',
                                    innerText: 'Architecture'
                                },
                                24: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'Here we now explore the core architecture of the proposed product. The culmination of all the above research leads to a set of definable requirements that can be seen in Table 1. This table details a set of requirements as described from the point of view of the users actions, and marked as being a core part of the product or an optional requirement which wouldn’t hinder the functionality of the product.'
                                },
                                25: {
                                    type: 'div',
                                    className: 'table-container',
                                    id: 'reqGather-table-container',
                                },
                                26: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'From this list of requirements, an Activity Diagram can be constructed to visualise how a user would navigate across the app and the tasks that the system needs to perform in order to support these actions. This can be seen in the Figure 3 below.\n' +
                                        'A few tips to read this activity diagram. A full circle represents a start point. A full circle with another ring around it represents an end state. Large rectangles with text represent states that are carried out by users or the system. The orange diamonds represent decision points where multiple possible paths can be taken based on the response to the inner text.'
                                },
                                27: {
                                    // Image Container (img + caption)
                                    type: 'div',
                                    className: 'img-container flex-v',
                                    id: 'activityDiagram-img-container',
                                    children: {
                                        0: {
                                            type: 'img',
                                            className: 'domImg',
                                            id: 'activityDiagram-img',
                                            src: 'media/diagrams/activityDiagram.svg',
                                            alt: 'Activity Diagram for the proposed solution'
                                        },
                                        1: {
                                            type: 'p',
                                            className: 'img-caption',
                                            id: 'activityDiagram-img-caption',
                                            innerText: 'Figure 3 : Activity Diagram of the proposed solution.'
                                        }
                                    }
                                },
                                28: {
                                    type: 'p',
                                    className: 'sectionParagraph',
                                    innerText: 'Of great utility for software engineers and developers is the construction of a sequence diagram. This diagram shows how an action triggered by a key player gets executed with all relevant parties. In this case the main players are the User and the System, and other parties are the API providers and the meta data generated for the user. All this can be seen in the Figure 4 below.\n' +
                                        'A note to read Sequence diagrams. All action flows from the top to the bottom. Actions from one actor to another follow arrows and must take the next arrow leaving towards the right before being able to take any arrow going to the left. Gray squares indicate decision points where based on the condition in the top left corner, the sequence within that part of the decision square can be carried out.'
                                },
                                29: {
                                    type: 'div',
                                    className: 'img-container flex-v',
                                    id: 'sequenceDiagram-img-container',
                                    children: {
                                        0: {
                                            type: 'img',
                                            className: 'domImg',
                                            id: 'sequenceDiagram-img',
                                            src: 'media/diagrams/sequenceDiagram.svg',
                                            alt: 'Sequence Diagram for the proposed solution'
                                        },
                                        1: {
                                            type: 'p',
                                            className: 'img-caption',
                                            id: 'sequenceDiagram-img-caption',
                                            innerText: 'Figure 3 : Sequence Diagram of the proposed solution.'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "designEx": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'designEx-container',
            children: {
                0: {
                    type: 'h2',
                    className: 'sectionTitle',
                    id: 'designEx-title',
                    innerText: 'Design Exploration',
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'After defining the requirements and architecture for this proposed solution, a design exploration phase can be carried out. This phase consisted of an overview of the design language of existing products as well as of conceptual ideas. This process is two fold, the first being where the designer submerges themselves in a large range of different design inspirations that are collected into a virtual design board. From there, a design language for the proposed solution can start to be regrouped and selected pieces can start to be analysed deeper. This first part is mostly internal to the designer and it\'s only this second part that can be presented through the series of images below. These have been annotated and colour coded by the designer. It follows a simple traffic light system where green comments represent ones that are very appreciated, orange less so and red disliked. Comments left in black either have no opinion to them or are general notes.',
                },
                2: {
                    type: 'div',
                    className: 'carousel-container',
                    children: {
                        0: {
                            type: 'div',
                            className: 'carousel',
                            id: 'designEx-carousel'
                        },
                        1: {
                            type: 'p',
                            className: 'carousel-caption',
                            innerText: 'Designer comments on pallet of conceptual design inspirations (colour coded, traffic light system).'
                        }
                    }
                }
            }
        }
    },
    "lowFi": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'lowFi-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            innerText: 'Low-Fidelity Prototyping',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'This phase consisted of taking in all previously collected knowledge and information to start very rough sketches of how the look and feel of the app would be. Drawn exclusively by hand to remove the ‘perfectionist’ attribute that digital sketching brings, a series of key views or pages were created. These views include the following:'
                },
                2: {
                    type: 'div',
                    className: 'list',
                    id: 'lowFi-list',
                    children: {
                        0: {
                            type: 'ul',
                            children: {
                                0: {
                                    type: 'li',
                                    innerText: 'Loading View,'
                                },
                                1: {
                                    type: 'li',
                                    innerText: 'Homepage,'
                                },
                                2: {
                                    type: 'li',
                                    innerText: 'Speciality Pages,'
                                },
                                3: {
                                    type: 'ul',
                                    children: {
                                        0: {
                                            type: 'li',
                                            innerText: 'Settings View,'
                                        },
                                        1: {
                                            type: 'li',
                                            innerText: 'Favourites View,'
                                        }
                                    }
                                },
                                4: {
                                    type: 'li',
                                    innerText: 'Search Action,'
                                },
                                5: {
                                    type: 'li',
                                    innerText: 'Search Bar Options.'
                                }
                            }
                        }
                    }
                },
                3: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'Designing these views allowed for an initial visual exploration of the app which can be seen in the set of images that follow.'
                },
                4: {
                    type: 'div',
                    className: 'carousel-container',
                    children: {
                        0: {
                            type: 'div',
                            className: 'carousel',
                            id: 'lowFi-carousel'
                        },
                        1: {
                            type: 'p',
                            className: 'carousel-caption',
                            innerText: 'Hand Sketches used for Participant Testing.'
                        }
                    }
                },
                5: {
                    type: 'h3',
                    className: 'sectionSubTitle',
                    innerText: 'User Testing'
                },
                6: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'From these initial hand sketches, participants can now be called to start the iterative process of designing and evaluating. At this point, participants are asked more for their general impressions, express any confusing elements, and suggest potential improvements for the overall user journey.\n' +
                        '\n' +
                        'The feedback collected at this stage is reported in the following Table 2, with main comments on adding clarity to the units of values, making sure to prioritise key elements and insinuating that standardised icons would be beneficial.'
                },
                7: {
                    type: 'div',
                    className: 'table-container',
                    id: 'userTesting-table-container'
                }
            }
        }
    },
    "hiFi": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'hiFi-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            innerText: 'High-Fidelity Prototyping',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'For the high-fidelity prototype, a digital software called Figma was used. This tool allows for variants of components to be created which enables iterative prototyping of not only the whole system, but also of individual components. This allowed for rapid designing and testing of different components separately.',
                },
                2: {
                    type: 'h3',
                    className: 'sectionSubTitle',
                    innerText: 'Iterative Components'
                },
                3: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'Using Figmas’ built in components and variants feature, aspects of the prototype could be continuously updated without needing to copy over all other features. Some of the key elements that benefited from this approach include the following:'
                },
                4: {
                    type: 'div',
                    className: 'list',
                    id: 'hiFi-list',
                    children: {
                        0: {
                            type: 'ul',
                            children: {
                                0: {
                                    type: 'li',
                                    innerText: 'Central Console,'
                                },
                                1: {
                                    type: 'li',
                                    innerText: 'Search Bar,'
                                },
                                2: {
                                    type: 'li',
                                    innerText: 'Bottom Card,'
                                },
                                3: {
                                    type: 'ul',
                                    children: {
                                        0: {
                                            type: 'li',
                                            innerText: 'Expanded Cards.'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                5: {
                    type: 'div',
                    className: 'carousel-container',
                    children: {
                        0: {
                            type: 'div',
                            className: 'carousel',
                            id: 'hiFi-carousel'
                        },
                        1: {
                            type: 'p',
                            className: 'carousel-caption',
                            innerText: 'Iterative components enabling rapid and iterative prototyping.'
                        }
                    }
                },
                6: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'This allowed for conceptual designs to be created very easily (as seen in Figure 5) which is very useful when getting participants input on different design decisions.'
                },
                7: {
                    type: 'div',
                    className: 'img-container flex-v',
                    id: 'hiFi-img-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'domImg',
                            id: 'hiFi-img',
                            src: 'media/images/mockups_interactiveComponents.png',
                            alt: 'Series of iPhone mockups of proposed solution with different key elements.'
                        },
                        1: {
                            type: 'p',
                            className: 'img-caption',
                            id: 'hiFi-img-caption',
                            innerText: 'Figure 5 : Example of Large Scale Prototyping, Ideal for Participant Feedback Gathering.'
                        }
                    }
                },
                8: {
                    type: 'h3',
                    className: 'sectionSubTitle',
                    innerText: 'Final Prototype'
                },
                9: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'Here is how the high-fidelity prototype for this project currently stands.'
                },
                10: {
                    type: 'div',
                    className: 'iframe-container flex',
                    id: 'hiFi-iframe-container',
                    children: {
                        0: {
                            type: 'iframe',
                            className: 'iframe-element',
                            id: 'hiFi-iframe-element',
                            width: 180,
                            height: 380,
                            src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoJg7khkUJ3o9A094yLZ4V5%2FDS-Air-Pollution-App%3Fpage-id%3D0%253A1%26node-id%3D467%253A647%26viewport%3D1842%252C110%252C0.2582710385322571%26scaling%3Dmin-zoom'
                        }
                    }
                }
            }
        }
    },
    "conclusion": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'conclusion-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            innerText: 'Conclusion',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'This project saw the undertaking of a detailed User Experience Research and Design undertaking on a mobile application for providing air quality information. Starting off with placing air quality in context, the processes analysed existing products, carrying out a design exploration phase and from there requirements gathering.\n' +
                        'Initial user feedback from low-fidelity sketches led to an iterative approach for high-fidelity prototyping.'
                }
            }
        }
    },
    "furtherWork": {
        0: {
            type: 'div',
            className: 'sections',
            id: 'furtherWork-container',
            children: {
                0: {
                    type: 'div',
                    className: 'sectionTitle-container',
                    children: {
                        0: {
                            type: 'img',
                            className: 'sectionTitle-img',
                            src: 'media/icons/file-document.svg',
                            alt: 'title img'
                        },
                        1: {
                            type: 'h2',
                            className: 'sectionTitle',
                            id: 'abstract-title',
                            innerText: 'Further Work',
                        }
                    }
                },
                1: {
                    type: 'p',
                    className: 'sectionParagraph',
                    innerText: 'No project can have enough testing, especially when it has not been officially launched. While the long-term goal would be to successfully develop and launch this product, the short-term goal would be to continue testing the high-fidelity prototype. Carrying out user testing with potential users, conducting heuristic evaluations as well as calling on qualified individuals to carry out expert evaluations all whilst continuing an iterative approach would be very beneficial.\n' +
                        'The development of this product as a usable app would benefit from continuing the iterative approach. This would consist of creating a minimum viable product based on the core requirements defined in this project. Once created and launched, optional requirements defined would be iteratively implemented alongside continuous live user testing to better improve the overall experience.'
                }
            }
        }
    }
};
