const vox = require("parse-magica-voxel")
const xml = require("xml2js")
const fs = require("node:fs")

const builder = new xml.Builder()

function handle(file) {
    fs.readFile(file, function (err, out) {
        var voxdata = vox(out)
        var xmljsondata = {
            "roblox": {
                "$": {
                    "xmlns:xmime": "http://www.w3.org/2005/05/xmlmime",
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                    "xsi:noNamespaceSchemaLocation": "http://www.roblox.com/roblox.xsd",
                    "version": "4"
                },
                "Meta": [
                    {
                        "_": "true",
                        "$": {
                            "name": "ExplicitAutoJoints"
                        }
                    }
                ],
                "External": [
                    "null",
                    "nil"
                ],
                "Item": [
                    {
                        "$": {
                            "class": "Model"
                        },
                        "Properties": [
                            {
                                "BinaryString": [
                                    {
                                        "$": {
                                            "name": "AttributesSerialize"
                                        }
                                    },
                                    {
                                        "$": {
                                            "name": "Tags"
                                        }
                                    }
                                ],
                                "token": [
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "LevelOfDetail"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "ModelStreamingMode"
                                        }
                                    }
                                ],
                                "CoordinateFrame": [
                                    {
                                        "$": {
                                            "name": "ModelMeshCFrame"
                                        },
                                        "X": [
                                            "0"
                                        ],
                                        "Y": [
                                            "0"
                                        ],
                                        "Z": [
                                            "0"
                                        ],
                                        "R00": [
                                            "1"
                                        ],
                                        "R01": [
                                            "0"
                                        ],
                                        "R02": [
                                            "0"
                                        ],
                                        "R10": [
                                            "0"
                                        ],
                                        "R11": [
                                            "1"
                                        ],
                                        "R12": [
                                            "0"
                                        ],
                                        "R20": [
                                            "0"
                                        ],
                                        "R21": [
                                            "0"
                                        ],
                                        "R22": [
                                            "1"
                                        ]
                                    }
                                ],
                                "Vector3": [
                                    {
                                        "$": {
                                            "name": "ModelMeshSize"
                                        },
                                        "X": [
                                            "0"
                                        ],
                                        "Y": [
                                            "0"
                                        ],
                                        "Z": [
                                            "0"
                                        ]
                                    }
                                ],
                                "string": [
                                    {
                                        "_": "vox-rbxmx output",
                                        "$": {
                                            "name": "Name"
                                        }
                                    }
                                ],
                                "bool": [
                                    {
                                        "_": "false",
                                        "$": {
                                            "name": "NeedsPivotMigration"
                                        }
                                    }
                                ],
                                "Ref": [
                                    {
                                        "_": "null",
                                        "$": {
                                            "name": "PrimaryPart"
                                        }
                                    }
                                ],
                                "float": [
                                    {
                                        "_": "1",
                                        "$": {
                                            "name": "ScaleFactor"
                                        }
                                    }
                                ],
                                "int64": [
                                    {
                                        "_": "-1",
                                        "$": {
                                            "name": "SourceAssetId"
                                        }
                                    }
                                ],
                                "OptionalCoordinateFrame": [
                                    {
                                        "$": {
                                            "name": "WorldPivotData"
                                        }
                                    }
                                ]
                            }
                        ],
                        "Item": []
                    }
                ]
            }
        }

        var firstModel = {
            "$": {
                "class": "Model"
            },
            "Properties": [
                {
                  "BinaryString": [
                    {
                      "$": {
                        "name": "AttributesSerialize"
                      }
                    },
                    {
                      "$": {
                        "name": "Tags"
                      }
                    }
                  ],
                  "token": [
                    {
                      "_": "0",
                      "$": {
                        "name": "LevelOfDetail"
                      }
                    },
                    {
                      "_": "0",
                      "$": {
                        "name": "ModelStreamingMode"
                      }
                    }
                  ],
                  "CoordinateFrame": [
                    {
                      "$": {
                        "name": "ModelMeshCFrame"
                      },
                      "X": [
                        "0"
                      ],
                      "Y": [
                        "0"
                      ],
                      "Z": [
                        "0"
                      ],
                      "R00": [
                        "1"
                      ],
                      "R01": [
                        "0"
                      ],
                      "R02": [
                        "0"
                      ],
                      "R10": [
                        "0"
                      ],
                      "R11": [
                        "1"
                      ],
                      "R12": [
                        "0"
                      ],
                      "R20": [
                        "0"
                      ],
                      "R21": [
                        "0"
                      ],
                      "R22": [
                        "1"
                      ]
                    }
                  ],
                  "Vector3": [
                    {
                      "$": {
                        "name": "ModelMeshSize"
                      },
                      "X": [
                        "0"
                      ],
                      "Y": [
                        "0"
                      ],
                      "Z": [
                        "0"
                      ]
                    }
                  ],
                  "string": [
                    {
                      "_": "Model",
                      "$": {
                        "name": "Name"
                      }
                    }
                  ],
                  "bool": [
                    {
                      "_": "false",
                      "$": {
                        "name": "NeedsPivotMigration"
                      }
                    }
                  ],
                  "Ref": [
                    {
                      "_": "null",
                      "$": {
                        "name": "PrimaryPart"
                      }
                    }
                  ],
                  "float": [
                    {
                      "_": "1",
                      "$": {
                        "name": "ScaleFactor"
                      }
                    }
                  ],
                  "int64": [
                    {
                      "_": "-1",
                      "$": {
                        "name": "SourceAssetId"
                      }
                    }
                  ],
                  "OptionalCoordinateFrame": [
                    {
                      "$": {
                        "name": "WorldPivotData"
                      }
                    }
                  ]
                }
            ],
            "Item": []
        }
        xmljsondata.roblox.Item[0].Item.push(firstModel)
        var index = 0
        voxdata.XYZI.forEach(voxel => {
            var color = [0, 0, 0]
            var transparency = 0

            if (Array.isArray(voxel)) {
                var themodel = {
                    "$": {
                        "class": "Model"
                    },
                    "Properties": [
                        {
                          "BinaryString": [
                            {
                              "$": {
                                "name": "AttributesSerialize"
                              }
                            },
                            {
                              "$": {
                                "name": "Tags"
                              }
                            }
                          ],
                          "token": [
                            {
                              "_": "0",
                              "$": {
                                "name": "LevelOfDetail"
                              }
                            },
                            {
                              "_": "0",
                              "$": {
                                "name": "ModelStreamingMode"
                              }
                            }
                          ],
                          "CoordinateFrame": [
                            {
                              "$": {
                                "name": "ModelMeshCFrame"
                              },
                              "X": [
                                "0"
                              ],
                              "Y": [
                                "0"
                              ],
                              "Z": [
                                "0"
                              ],
                              "R00": [
                                "1"
                              ],
                              "R01": [
                                "0"
                              ],
                              "R02": [
                                "0"
                              ],
                              "R10": [
                                "0"
                              ],
                              "R11": [
                                "1"
                              ],
                              "R12": [
                                "0"
                              ],
                              "R20": [
                                "0"
                              ],
                              "R21": [
                                "0"
                              ],
                              "R22": [
                                "1"
                              ]
                            }
                          ],
                          "Vector3": [
                            {
                              "$": {
                                "name": "ModelMeshSize"
                              },
                              "X": [
                                "0"
                              ],
                              "Y": [
                                "0"
                              ],
                              "Z": [
                                "0"
                              ]
                            }
                          ],
                          "string": [
                            {
                              "_": "Model",
                              "$": {
                                "name": "Name"
                              }
                            }
                          ],
                          "bool": [
                            {
                              "_": "false",
                              "$": {
                                "name": "NeedsPivotMigration"
                              }
                            }
                          ],
                          "Ref": [
                            {
                              "_": "null",
                              "$": {
                                "name": "PrimaryPart"
                              }
                            }
                          ],
                          "float": [
                            {
                              "_": "1",
                              "$": {
                                "name": "ScaleFactor"
                              }
                            }
                          ],
                          "int64": [
                            {
                              "_": "-1",
                              "$": {
                                "name": "SourceAssetId"
                              }
                            }
                          ],
                          "OptionalCoordinateFrame": [
                            {
                              "$": {
                                "name": "WorldPivotData"
                              }
                            }
                          ]
                        }
                    ],
                    "Item": []
                }
                voxel.forEach(voxel => {
                    color = [voxdata.RGBA[voxel.c].r / 255, voxdata.RGBA[voxel.c].g / 255, voxdata.RGBA[voxel.c].b / 255]
                    transparency = (255 - voxdata.RGBA[voxel.c].a) / 255

                    themodel.Item.push({
                        "$": {
                            "class": "Part"
                        },
                        "Properties": [
                            {
                                "bool": [
                                    {
                                        "_": "false",
                                        "$": {
                                            "name": "Anchored"
                                        }
                                    },
                                    {
                                        "_": "true",
                                        "$": {
                                            "name": "CanCollide"
                                        }
                                    },
                                    {
                                        "_": "true",
                                        "$": {
                                            "name": "CanQuery"
                                        }
                                    },
                                    {
                                        "_": "true",
                                        "$": {
                                            "name": "CanTouch"
                                        }
                                    },
                                    {
                                        "_": "true",
                                        "$": {
                                            "name": "CastShadow"
                                        }
                                    },
                                    {
                                        "_": "false",
                                        "$": {
                                            "name": "Locked"
                                        }
                                    },
                                    {
                                        "_": "false",
                                        "$": {
                                            "name": "Massless"
                                        }
                                    }
                                ],
                                "BinaryString": [
                                    {
                                        "$": {
                                            "name": "AttributesSerialize"
                                        }
                                    },
                                    {
                                        "$": {
                                            "name": "Tags"
                                        }
                                    }
                                ],
                                "float": [
                                    {
                                        "_": "-0.5",
                                        "$": {
                                            "name": "BackParamA"
                                        }
                                    },
                                    {
                                        "_": "0.5",
                                        "$": {
                                            "name": "BackParamB"
                                        }
                                    },
                                    {
                                        "_": "-0.5",
                                        "$": {
                                            "name": "BottomParamA"
                                        }
                                    },
                                    {
                                        "_": "0.5",
                                        "$": {
                                            "name": "BottomParamB"
                                        }
                                    },
                                    {
                                        "_": "-0.5",
                                        "$": {
                                            "name": "FrontParamA"
                                        }
                                    },
                                    {
                                        "_": "0.5",
                                        "$": {
                                            "name": "FrontParamB"
                                        }
                                    },
                                    {
                                        "_": "-0.5",
                                        "$": {
                                            "name": "LeftParamA"
                                        }
                                    },
                                    {
                                        "_": "0.5",
                                        "$": {
                                            "name": "LeftParamB"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "Reflectance"
                                        }
                                    },
                                    {
                                        "_": "-0.5",
                                        "$": {
                                            "name": "RightParamA"
                                        }
                                    },
                                    {
                                        "_": "0.5",
                                        "$": {
                                            "name": "RightParamB"
                                        }
                                    },
                                    {
                                        "_": "-0.5",
                                        "$": {
                                            "name": "TopParamA"
                                        }
                                    },
                                    {
                                        "_": "0.5",
                                        "$": {
                                            "name": "TopParamB"
                                        }
                                    },
                                    {
                                        "_": transparency,
                                        "$": {
                                            "name": "Transparency"
                                        }
                                    }
                                ],
                                "token": [
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "BackSurface"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "BackSurfaceInput"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "BottomSurface"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "BottomSurfaceInput"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "FrontSurface"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "FrontSurfaceInput"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "LeftSurface"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "LeftSurfaceInput"
                                        }
                                    },
                                    {
                                        "_": "272",
                                        "$": {
                                            "name": "Material"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "RightSurface"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "RightSurfaceInput"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "TopSurface"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "TopSurfaceInput"
                                        }
                                    },
                                    {
                                        "_": "1",
                                        "$": {
                                            "name": "formFactorRaw"
                                        }
                                    },
                                    {
                                        "_": "1",
                                        "$": {
                                            "name": "shape"
                                        }
                                    }
                                ],
                                "CoordinateFrame": [
                                    {
                                        "$": {
                                            "name": "CFrame"
                                        },
                                        "X": [
                                            voxel.x * 0.25
                                        ],
                                        "Y": [
                                            voxel.y * 0.25
                                        ],
                                        "Z": [
                                            voxel.z * 0.25
                                        ],
                                        "R00": [
                                            "1"
                                        ],
                                        "R01": [
                                            "0"
                                        ],
                                        "R02": [
                                            "0"
                                        ],
                                        "R10": [
                                            "0"
                                        ],
                                        "R11": [
                                            "1"
                                        ],
                                        "R12": [
                                            "0"
                                        ],
                                        "R20": [
                                            "0"
                                        ],
                                        "R21": [
                                            "0"
                                        ],
                                        "R22": [
                                            "1"
                                        ]
                                    },
                                    {
                                        "$": {
                                            "name": "PivotOffset"
                                        },
                                        "X": [
                                            "0"
                                        ],
                                        "Y": [
                                            "0"
                                        ],
                                        "Z": [
                                            "0"
                                        ],
                                        "R00": [
                                            "1"
                                        ],
                                        "R01": [
                                            "0"
                                        ],
                                        "R02": [
                                            "0"
                                        ],
                                        "R10": [
                                            "0"
                                        ],
                                        "R11": [
                                            "1"
                                        ],
                                        "R12": [
                                            "0"
                                        ],
                                        "R20": [
                                            "0"
                                        ],
                                        "R21": [
                                            "0"
                                        ],
                                        "R22": [
                                            "1"
                                        ]
                                    }
                                ],
                                "string": [
                                    {
                                        "_": "Default",
                                        "$": {
                                            "name": "CollisionGroup"
                                        }
                                    },
                                    {
                                        "$": {
                                            "name": "MaterialVariantSerialized"
                                        }
                                    },
                                    {
                                        "_": "Part",
                                        "$": {
                                            "name": "Name"
                                        }
                                    }
                                ],
                                "int": [
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "CollisionGroupId"
                                        }
                                    },
                                    {
                                        "_": "0",
                                        "$": {
                                            "name": "RootPriority"
                                        }
                                    }
                                ],
                                "Color3": [
                                    {
                                        "$": {
                                            "name": "Color"
                                        },
                                        "R": [
                                            color[0]
                                        ],
                                        "G": [
                                            color[1]
                                        ],
                                        "B": [
                                            color[2]
                                        ]
                                    }
                                ],
                                "PhysicalProperties": [
                                    {
                                        "$": {
                                            "name": "CustomPhysicalProperties"
                                        },
                                        "CustomPhysics": [
                                            "false"
                                        ]
                                    }
                                ],
                                "Vector3": [
                                    {
                                        "$": {
                                            "name": "RotVelocity"
                                        },
                                        "X": [
                                            "0"
                                        ],
                                        "Y": [
                                            "0"
                                        ],
                                        "Z": [
                                            "0"
                                        ]
                                    },
                                    {
                                        "$": {
                                            "name": "Velocity"
                                        },
                                        "X": [
                                            "0"
                                        ],
                                        "Y": [
                                            "0"
                                        ],
                                        "Z": [
                                            "0"
                                        ]
                                    },
                                    {
                                        "$": {
                                            "name": "size"
                                        },
                                        "X": [
                                            "0.25"
                                        ],
                                        "Y": [
                                            "0.25"
                                        ],
                                        "Z": [
                                            "0.25"
                                        ]
                                    }
                                ],
                                "int64": [
                                    {
                                        "_": "-1",
                                        "$": {
                                            "name": "SourceAssetId"
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                })

                xmljsondata.roblox.Item[0].Item.push(themodel)
            } else {

                color = [voxdata.RGBA[voxel.c].r / 255, voxdata.RGBA[voxel.c].g / 255, voxdata.RGBA[voxel.c].b / 255]
                transparency = (255 - voxdata.RGBA[voxel.c].a) / 255

                xmljsondata.roblox.Item[0].Item[0].Item.push({
                    "$": {
                        "class": "Part"
                    },
                    "Properties": [
                        {
                            "bool": [
                                {
                                    "_": "false",
                                    "$": {
                                        "name": "Anchored"
                                    }
                                },
                                {
                                    "_": "true",
                                    "$": {
                                        "name": "CanCollide"
                                    }
                                },
                                {
                                    "_": "true",
                                    "$": {
                                        "name": "CanQuery"
                                    }
                                },
                                {
                                    "_": "true",
                                    "$": {
                                        "name": "CanTouch"
                                    }
                                },
                                {
                                    "_": "true",
                                    "$": {
                                        "name": "CastShadow"
                                    }
                                },
                                {
                                    "_": "false",
                                    "$": {
                                        "name": "Locked"
                                    }
                                },
                                {
                                    "_": "false",
                                    "$": {
                                        "name": "Massless"
                                    }
                                }
                            ],
                            "BinaryString": [
                                {
                                    "$": {
                                        "name": "AttributesSerialize"
                                    }
                                },
                                {
                                    "$": {
                                        "name": "Tags"
                                    }
                                }
                            ],
                            "float": [
                                {
                                    "_": "-0.5",
                                    "$": {
                                        "name": "BackParamA"
                                    }
                                },
                                {
                                    "_": "0.5",
                                    "$": {
                                        "name": "BackParamB"
                                    }
                                },
                                {
                                    "_": "-0.5",
                                    "$": {
                                        "name": "BottomParamA"
                                    }
                                },
                                {
                                    "_": "0.5",
                                    "$": {
                                        "name": "BottomParamB"
                                    }
                                },
                                {
                                    "_": "-0.5",
                                    "$": {
                                        "name": "FrontParamA"
                                    }
                                },
                                {
                                    "_": "0.5",
                                    "$": {
                                        "name": "FrontParamB"
                                    }
                                },
                                {
                                    "_": "-0.5",
                                    "$": {
                                        "name": "LeftParamA"
                                    }
                                },
                                {
                                    "_": "0.5",
                                    "$": {
                                        "name": "LeftParamB"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "Reflectance"
                                    }
                                },
                                {
                                    "_": "-0.5",
                                    "$": {
                                        "name": "RightParamA"
                                    }
                                },
                                {
                                    "_": "0.5",
                                    "$": {
                                        "name": "RightParamB"
                                    }
                                },
                                {
                                    "_": "-0.5",
                                    "$": {
                                        "name": "TopParamA"
                                    }
                                },
                                {
                                    "_": "0.5",
                                    "$": {
                                        "name": "TopParamB"
                                    }
                                },
                                {
                                    "_": transparency,
                                    "$": {
                                        "name": "Transparency"
                                    }
                                }
                            ],
                            "token": [
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "BackSurface"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "BackSurfaceInput"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "BottomSurface"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "BottomSurfaceInput"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "FrontSurface"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "FrontSurfaceInput"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "LeftSurface"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "LeftSurfaceInput"
                                    }
                                },
                                {
                                    "_": "272",
                                    "$": {
                                        "name": "Material"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "RightSurface"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "RightSurfaceInput"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "TopSurface"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "TopSurfaceInput"
                                    }
                                },
                                {
                                    "_": "1",
                                    "$": {
                                        "name": "formFactorRaw"
                                    }
                                },
                                {
                                    "_": "1",
                                    "$": {
                                        "name": "shape"
                                    }
                                }
                            ],
                            "CoordinateFrame": [
                                {
                                    "$": {
                                        "name": "CFrame"
                                    },
                                    "X": [
                                        voxel.x * 0.25
                                    ],
                                    "Y": [
                                        voxel.y * 0.25
                                    ],
                                    "Z": [
                                        voxel.z * 0.25
                                    ],
                                    "R00": [
                                        "1"
                                    ],
                                    "R01": [
                                        "0"
                                    ],
                                    "R02": [
                                        "0"
                                    ],
                                    "R10": [
                                        "0"
                                    ],
                                    "R11": [
                                        "1"
                                    ],
                                    "R12": [
                                        "0"
                                    ],
                                    "R20": [
                                        "0"
                                    ],
                                    "R21": [
                                        "0"
                                    ],
                                    "R22": [
                                        "1"
                                    ]
                                },
                                {
                                    "$": {
                                        "name": "PivotOffset"
                                    },
                                    "X": [
                                        "0"
                                    ],
                                    "Y": [
                                        "0"
                                    ],
                                    "Z": [
                                        "0"
                                    ],
                                    "R00": [
                                        "1"
                                    ],
                                    "R01": [
                                        "0"
                                    ],
                                    "R02": [
                                        "0"
                                    ],
                                    "R10": [
                                        "0"
                                    ],
                                    "R11": [
                                        "1"
                                    ],
                                    "R12": [
                                        "0"
                                    ],
                                    "R20": [
                                        "0"
                                    ],
                                    "R21": [
                                        "0"
                                    ],
                                    "R22": [
                                        "1"
                                    ]
                                }
                            ],
                            "string": [
                                {
                                    "_": "Default",
                                    "$": {
                                        "name": "CollisionGroup"
                                    }
                                },
                                {
                                    "$": {
                                        "name": "MaterialVariantSerialized"
                                    }
                                },
                                {
                                    "_": "Part",
                                    "$": {
                                        "name": "Name"
                                    }
                                }
                            ],
                            "int": [
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "CollisionGroupId"
                                    }
                                },
                                {
                                    "_": "0",
                                    "$": {
                                        "name": "RootPriority"
                                    }
                                }
                            ],
                            "Color3": [
                                {
                                    "$": {
                                        "name": "Color"
                                    },
                                    "R": [
                                        color[0]
                                    ],
                                    "G": [
                                        color[1]
                                    ],
                                    "B": [
                                        color[2]
                                    ]
                                }
                            ],
                            "PhysicalProperties": [
                                {
                                    "$": {
                                        "name": "CustomPhysicalProperties"
                                    },
                                    "CustomPhysics": [
                                        "false"
                                    ]
                                }
                            ],
                            "Vector3": [
                                {
                                    "$": {
                                        "name": "RotVelocity"
                                    },
                                    "X": [
                                        "0"
                                    ],
                                    "Y": [
                                        "0"
                                    ],
                                    "Z": [
                                        "0"
                                    ]
                                },
                                {
                                    "$": {
                                        "name": "Velocity"
                                    },
                                    "X": [
                                        "0"
                                    ],
                                    "Y": [
                                        "0"
                                    ],
                                    "Z": [
                                        "0"
                                    ]
                                },
                                {
                                    "$": {
                                        "name": "size"
                                    },
                                    "X": [
                                        "0.25"
                                    ],
                                    "Y": [
                                        "0.25"
                                    ],
                                    "Z": [
                                        "0.25"
                                    ]
                                }
                            ],
                            "int64": [
                                {
                                    "_": "-1",
                                    "$": {
                                        "name": "SourceAssetId"
                                    }
                                }
                            ]
                        }
                    ]
                })
            }
        })

        fs.writeFile("output.rbxmx", builder.buildObject(xmljsondata), function (err) { })
    })
}

handle("input.vox")
