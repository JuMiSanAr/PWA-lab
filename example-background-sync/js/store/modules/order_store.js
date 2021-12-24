import { demotools } from "/shopfloor_mobile_base/static/wms/src/demo/demo.core.js";

export default class {
    constructor(orders = {}) {
        this.state = {
            orders: orders,
        };
        this.mutations = {
            // NOTE: The orders mutations start with orders_
            // so that the store subscription can identify
            // which key in sessionStorage needs to be updated
            // after each store change.
            orders_loadOrders: (state, orders) => {
                state.orders = orders;
            },
            orders_addOrder: (state, cart) => {
                this.initOrders(state)    
                const new_order = this.createNewOrder()   
                new_order.lines = cart.lines         
                this.state.orders.unshift(new_order)
            }
        };
    }
    initOrders(state) {
        state.orders = [
            {
                "id": 170118,
                "state": "shipping_done",
                "state_label": "Fully shipped",
                "name": "SO0170116",
                "date": "2021-11-29T08:56:19",
                "client_order_ref": "Bruno Schefer",
                "step": {
                    "current": "cart_address",
                    "done": [
                        "cart_index",
                        "cart_address"
                    ]
                },
                "lines": {
                    "items": [
                        {
                            "id": 792451,
                            "product": {
                                "objectID": 14052,
                                "model": {
                                    "name": "Kinderwindeln Libero Baby Soft Newborn  N"
                                },
                                "url_key": "kinderwindeln-libero-baby-soft-newborn-n",
                                "redirect_url_key": [],
                                "main": false,
                                "short_description": "<p><br></p>",
                                "description": "<p>Windel für die speziellen Bedürfnisse von Neugeborenen: unglaublich komfortabel, super-saugfähig, wunderbar weich und flexibel. </p><p><br></p><p>[105002530] Kinderwindeln Libero Baby Soft Newborn (1 (2-5kg))</p><p>Saugstärke 258ml</p><p><br></p><p><br></p><p>[105006332] Kinderwindeln Libero Baby Soft Newborn (2 (3-6kg))</p><p>Saugstärke 368ml</p><p><br></p>",
                                "name": "Kinderwindeln Libero Baby Soft Newborn  N (Ja, 2 (3-6kg))",
                                "seo_title": "Kinderwindeln Libero Baby Soft Newborn  N | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 2,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105008419",
                                "variant_attributes": {
                                    "latexfrei": "Ja",
                                    "naturliche_zahlen": "2 (3-6kg)"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-209805.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-209807.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-209809.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-209810.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-219860.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-219861.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-219864.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-219865.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105008419",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Natürliche Zahlen",
                                        "values": [
                                            {
                                                "name": "1 (2-5kg)",
                                                "sku": "105008417",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "2 (3-6kg)",
                                                "sku": "105008419",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 53813,
                                        "qty": 4080,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541307343",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 120
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 20
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 4080
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 53812,
                                                "qty": 20,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197708",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 6
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 204
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53812,
                                        "qty": 204,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197708",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 6
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 204
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 53811,
                                                "qty": 6,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197692",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 34
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53811,
                                        "qty": 34,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197692",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 34
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 34,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2349,
                                        "tax_included": false,
                                        "original_value": 0.2349,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2349,
                                        "tax_included": false,
                                        "original_value": 0.2349,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.21141,
                                        "tax_included": false,
                                        "original_value": 0.21141,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.25839,
                                        "tax_included": false,
                                        "original_value": 0.25839,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.28188,
                                        "tax_included": false,
                                        "original_value": 0.28188,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.35235,
                                        "tax_included": false,
                                        "original_value": 0.35235,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541416557",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1051 - Mischpalett)",
                                    "product_code": "8419",
                                    "id": 22132
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 29915
                            },
                            "amount": {
                                "price": 0.1628,
                                "untaxed": 33.21,
                                "tax": 2.55717,
                                "total": 35.77,
                                "total_without_discount": 35.77
                            },
                            "qty": 204,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 204,
                            "packaging": {
                                "id": 53812,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322541197708",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 6
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 204
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 53812,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322541197708",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 53811,
                                            "qty": 6,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541197692",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 792457,
                            "product": {
                                "objectID": 21236,
                                "model": {
                                    "name": "Kinderwindeln Libero Comfort"
                                },
                                "url_key": "kinderwindeln-libero-comfort",
                                "redirect_url_key": [
                                    "kinderwindeln-libero-comfort-105002581"
                                ],
                                "main": false,
                                "short_description": "<p><br></p>",
                                "description": "<p>Zuverlässig, unglaublich sicher und komfortabel: flexible und atmungsaktive Windeln für aktive Babys. </p><p><br></p><p><span style=\"color: rgb(0, 0, 0); font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit; text-align: inherit;\">[</span>105002551] Kinderwindeln Libero Comfort (3 (5-9kg))<br>Saugstärke 475ml</p><br>\n\n<p>[105002561] Kinderwindeln Libero Comfort (4 (7-11kg))<br>Saugstärke 555ml</p><br>\n\n<p>[105002571] Kinderwindeln Libero Comfort (5 (10-14kg))<br>Saugstärke 568ml</p><br>\n\n<p>[105003360] Kinderwindeln Libero Comfort (7 (16-26kg))<br>Saugstärke 763ml</p><br>",
                                "name": "Kinderwindeln Libero Comfort (5 (10-14kg), Ja, Libero Comfort)",
                                "seo_title": "Kinderwindeln Libero Comfort | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 5,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105002571",
                                "variant_attributes": {
                                    "grosse_(naturliche_zahl)": "5 (10-14kg)",
                                    "latexfrei": "Ja",
                                    "marke": "Libero Comfort"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_100_100-219806.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_300_300-219807.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_600_480-219809.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_1024_768-219811.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_100_100-15566.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_300_300-15567.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_600_480-15568.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_1024_768-15569.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "Grösse (natürliche Zahl)",
                                        "values": [
                                            {
                                                "name": "3 (5-9kg)",
                                                "sku": "105002551",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "4 (7-11kg)",
                                                "sku": "105002561",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "5 (10-14kg)",
                                                "sku": "105002571",
                                                "available": true,
                                                "selected": true
                                            },
                                            {
                                                "name": "6 (13-20kg)",
                                                "sku": "105002581",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "7 (16-26kg)",
                                                "sku": "105003360",
                                                "available": true,
                                                "selected": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105002571",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Marke",
                                        "values": [
                                            {
                                                "name": "Libero Comfort",
                                                "sku": "105002571",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 60406,
                                        "qty": 6912,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541175195",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 288
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 36
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 6912
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 60405,
                                                "qty": 36,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322541116921",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 8
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 192
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 60405,
                                        "qty": 192,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322541116921",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 8
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 192
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 60404,
                                                "qty": 8,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541116914",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 24
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 60404,
                                        "qty": 24,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541116914",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 24
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 24,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2943,
                                        "tax_included": false,
                                        "original_value": 0.2943,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2943,
                                        "tax_included": false,
                                        "original_value": 0.2943,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.26487,
                                        "tax_included": false,
                                        "original_value": 0.26487,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.32373,
                                        "tax_included": false,
                                        "original_value": 0.32373,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.35316000000000003,
                                        "tax_included": false,
                                        "original_value": 0.35316000000000003,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.44145,
                                        "tax_included": false,
                                        "original_value": 0.44145,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541171043",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1050 - Volle Paletten)",
                                    "product_code": "8305",
                                    "id": 26461
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 4400
                            },
                            "amount": {
                                "price": 0.20455,
                                "untaxed": 39.27,
                                "tax": 3.0237900000000004,
                                "total": 42.29,
                                "total_without_discount": 42.29
                            },
                            "qty": 192,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 192,
                            "packaging": {
                                "id": 60405,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322541116921",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 8
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 192
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 60405,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322541116921",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 60404,
                                            "qty": 8,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541116914",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "count": 396,
                    "amount": {
                        "tax": 5.580960000000001,
                        "untaxed": 72.48,
                        "total": 78.06
                    }
                },
                "amount": {
                    "tax": 5.58,
                    "untaxed": 72.48,
                    "total": 78.06,
                    "discount_total": 0,
                    "total_without_discount": 78.06,
                    "tax_without_shipping": 5.58,
                    "untaxed_without_shipping": 72.48,
                    "total_without_shipping": 78.06,
                    "total_without_shipping_without_discount": 78.06
                },
                "shipping": {
                    "address": {
                        "id": 58221,
                        "parent_id": 37264,
                        "type": "delivery",
                        "display_name": "Nina Ehrler",
                        "name": "Nina Ehrler",
                        "ref": "529862",
                        "street": "Breitensteinstrasse 45",
                        "street2": null,
                        "zip": "8037",
                        "city": "Zürich",
                        "phone": null,
                        "email": null,
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "address",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": null,
                        "enabled": true,
                        "industry_id": {
                            "id": 51,
                            "name": "Work Safety"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "amount": {
                        "tax": 0,
                        "untaxed": 0,
                        "total": 0
                    },
                    "selected_carrier": {
                        "id": 4,
                        "name": "Brauch Palette",
                        "code": null,
                        "description": null,
                        "type": null
                    }
                },
                "invoicing": {
                    "address": {
                        "id": 37264,
                        "parent_id": false,
                        "type": "contact",
                        "display_name": "Bruno Schefer (311)",
                        "name": "Bruno Schefer",
                        "ref": "311",
                        "street": "Erlenweg 8",
                        "street2": null,
                        "zip": "8704",
                        "city": "Herrliberg",
                        "phone": "+41 78 890 80 90",
                        "email": "bruno.schefer@cosanum.ch",
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "profile",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": {
                            "id": 37,
                            "name": "Herr"
                        },
                        "enabled": true,
                        "industry_id": {
                            "id": 74,
                            "name": "Cosanum - HCM"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    }
                },
                "expiration_date": false,
                "invoices": [
                    {
                        "id": 927542,
                        "name": "2021-4056995",
                        "date": "2021-11-30"
                    }
                ],
                "deliveries": [
                    {
                        "id": 701991,
                        "name": "SCH/OUTP/0057772",
                        "date": "2021-11-29T16:17:39"
                    },
                    {
                        "id": 702131,
                        "name": "SCH/OUTP/0057788",
                        "date": "2021-12-01T05:50:25"
                    }
                ],
                "from_shop": true
            },
            {
                "id": 163551,
                "state": "shipping_done",
                "state_label": "Fully shipped",
                "name": "SO0163549",
                "date": "2021-11-22T06:50:09",
                "client_order_ref": "Bruno Schefer",
                "step": {
                    "current": "cart_address",
                    "done": [
                        "cart_index",
                        "cart_address"
                    ]
                },
                "lines": {
                    "items": [
                        {
                            "id": 750467,
                            "product": {
                                "objectID": 14051,
                                "model": {
                                    "name": "Kinderwindeln Libero Baby Soft Newborn  N"
                                },
                                "url_key": "kinderwindeln-libero-baby-soft-newborn-n",
                                "redirect_url_key": [],
                                "main": true,
                                "short_description": "<p><br></p>",
                                "description": "<p>Windel für die speziellen Bedürfnisse von Neugeborenen: unglaublich komfortabel, super-saugfähig, wunderbar weich und flexibel. </p><p><br></p><p>[105002530] Kinderwindeln Libero Baby Soft Newborn (1 (2-5kg))</p><p>Saugstärke 258ml</p><p><br></p><p><br></p><p>[105006332] Kinderwindeln Libero Baby Soft Newborn (2 (3-6kg))</p><p>Saugstärke 368ml</p><p><br></p>",
                                "name": "Kinderwindeln Libero Baby Soft Newborn  N (Ja, 1 (2-5kg))",
                                "seo_title": "Kinderwindeln Libero Baby Soft Newborn  N | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 2,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105008417",
                                "variant_attributes": {
                                    "latexfrei": "Ja",
                                    "naturliche_zahlen": "1 (2-5kg)"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-209799.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-209800.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-209801.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-209802.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-219874.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-219875.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-219876.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-219877.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105008417",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Natürliche Zahlen",
                                        "values": [
                                            {
                                                "name": "1 (2-5kg)",
                                                "sku": "105008417",
                                                "available": true,
                                                "selected": true
                                            },
                                            {
                                                "name": "2 (3-6kg)",
                                                "sku": "105008419",
                                                "available": true,
                                                "selected": false
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 53809,
                                        "qty": 5760,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541270692",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 240
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 60
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 5760
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 53808,
                                                "qty": 60,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197579",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 4
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 96
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53808,
                                        "qty": 96,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197579",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 4
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 96
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 53807,
                                                "qty": 4,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197562",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 24
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53807,
                                        "qty": 24,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197562",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 24
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 24,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2159,
                                        "tax_included": false,
                                        "original_value": 0.2159,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2159,
                                        "tax_included": false,
                                        "original_value": 0.2159,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.19431,
                                        "tax_included": false,
                                        "original_value": 0.19431,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.23749,
                                        "tax_included": false,
                                        "original_value": 0.23749,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.25908000000000003,
                                        "tax_included": false,
                                        "original_value": 0.25908000000000003,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.32385,
                                        "tax_included": false,
                                        "original_value": 0.32385,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541413969",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1051 - Mischpalett)",
                                    "product_code": "8417",
                                    "id": 22133
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 29914
                            },
                            "amount": {
                                "price": 0.1496,
                                "untaxed": 14.36,
                                "tax": 1.10572,
                                "total": 15.47,
                                "total_without_discount": 15.47
                            },
                            "qty": 96,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 96,
                            "packaging": {
                                "id": 53808,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322541197579",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 4
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 96
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 53808,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322541197579",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 53807,
                                            "qty": 4,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541197562",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 750469,
                            "product": {
                                "objectID": 14052,
                                "model": {
                                    "name": "Kinderwindeln Libero Baby Soft Newborn  N"
                                },
                                "url_key": "kinderwindeln-libero-baby-soft-newborn-n",
                                "redirect_url_key": [],
                                "main": false,
                                "short_description": "<p><br></p>",
                                "description": "<p>Windel für die speziellen Bedürfnisse von Neugeborenen: unglaublich komfortabel, super-saugfähig, wunderbar weich und flexibel. </p><p><br></p><p>[105002530] Kinderwindeln Libero Baby Soft Newborn (1 (2-5kg))</p><p>Saugstärke 258ml</p><p><br></p><p><br></p><p>[105006332] Kinderwindeln Libero Baby Soft Newborn (2 (3-6kg))</p><p>Saugstärke 368ml</p><p><br></p>",
                                "name": "Kinderwindeln Libero Baby Soft Newborn  N (Ja, 2 (3-6kg))",
                                "seo_title": "Kinderwindeln Libero Baby Soft Newborn  N | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 2,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105008419",
                                "variant_attributes": {
                                    "latexfrei": "Ja",
                                    "naturliche_zahlen": "2 (3-6kg)"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-209805.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-209807.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-209809.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-209810.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-219860.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-219861.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-219864.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-219865.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105008419",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Natürliche Zahlen",
                                        "values": [
                                            {
                                                "name": "1 (2-5kg)",
                                                "sku": "105008417",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "2 (3-6kg)",
                                                "sku": "105008419",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 53813,
                                        "qty": 4080,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541307343",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 120
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 20
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 4080
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 53812,
                                                "qty": 20,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197708",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 6
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 204
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53812,
                                        "qty": 204,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197708",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 6
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 204
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 53811,
                                                "qty": 6,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197692",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 34
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53811,
                                        "qty": 34,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197692",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 34
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 34,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2349,
                                        "tax_included": false,
                                        "original_value": 0.2349,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2349,
                                        "tax_included": false,
                                        "original_value": 0.2349,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.21141,
                                        "tax_included": false,
                                        "original_value": 0.21141,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.25839,
                                        "tax_included": false,
                                        "original_value": 0.25839,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.28188,
                                        "tax_included": false,
                                        "original_value": 0.28188,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.35235,
                                        "tax_included": false,
                                        "original_value": 0.35235,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541416557",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1051 - Mischpalett)",
                                    "product_code": "8419",
                                    "id": 22132
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 29915
                            },
                            "amount": {
                                "price": 0.1628,
                                "untaxed": 33.21,
                                "tax": 2.55717,
                                "total": 35.77,
                                "total_without_discount": 35.77
                            },
                            "qty": 204,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 204,
                            "packaging": {
                                "id": 53812,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322541197708",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 6
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 204
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 53812,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322541197708",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 53811,
                                            "qty": 6,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541197692",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "count": 300,
                    "amount": {
                        "tax": 3.66289,
                        "untaxed": 47.57,
                        "total": 51.24
                    }
                },
                "amount": {
                    "tax": 3.66,
                    "untaxed": 47.57,
                    "total": 51.23,
                    "discount_total": 0,
                    "total_without_discount": 51.24,
                    "tax_without_shipping": 3.66,
                    "untaxed_without_shipping": 47.57,
                    "total_without_shipping": 51.230000000000004,
                    "total_without_shipping_without_discount": 51.230000000000004
                },
                "shipping": {
                    "address": {
                        "id": 80090,
                        "parent_id": 37264,
                        "type": "delivery",
                        "display_name": "Sascha Griesser",
                        "name": "Sascha Griesser",
                        "ref": "C16697",
                        "street": "Brandstrasse 43",
                        "street2": null,
                        "zip": "8952",
                        "city": "Schlieren",
                        "phone": null,
                        "email": null,
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "address",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": null,
                        "enabled": true,
                        "industry_id": {
                            "id": 51,
                            "name": "Work Safety"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "amount": {
                        "tax": 0,
                        "untaxed": 0,
                        "total": 0
                    },
                    "selected_carrier": {
                        "id": 4,
                        "name": "Brauch Palette",
                        "code": null,
                        "description": null,
                        "type": null
                    }
                },
                "invoicing": {
                    "address": {
                        "id": 37264,
                        "parent_id": false,
                        "type": "contact",
                        "display_name": "Bruno Schefer (311)",
                        "name": "Bruno Schefer",
                        "ref": "311",
                        "street": "Erlenweg 8",
                        "street2": null,
                        "zip": "8704",
                        "city": "Herrliberg",
                        "phone": "+41 78 890 80 90",
                        "email": "bruno.schefer@cosanum.ch",
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "profile",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": {
                            "id": 37,
                            "name": "Herr"
                        },
                        "enabled": true,
                        "industry_id": {
                            "id": 74,
                            "name": "Cosanum - HCM"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    }
                },
                "expiration_date": false,
                "invoices": [
                    {
                        "id": 927542,
                        "name": "2021-4056995",
                        "date": "2021-11-30"
                    }
                ],
                "deliveries": [
                    {
                        "id": 669447,
                        "name": "SCH/OUTP/0056160",
                        "date": "2021-11-22T14:18:05"
                    },
                    {
                        "id": 702102,
                        "name": "SCH/OUTP/0057782",
                        "date": "2021-12-01T05:49:25"
                    }
                ],
                "from_shop": true
            },
            {
                "id": 143919,
                "state": "shipping_done",
                "state_label": "Fully shipped",
                "name": "SO0143917",
                "date": "2021-10-27T12:35:47",
                "client_order_ref": "Philipp",
                "step": {
                    "current": false,
                    "done": []
                },
                "lines": {
                    "items": [
                        {
                            "id": 642171,
                            "product": {
                                "objectID": 6806,
                                "model": {
                                    "name": "Toilettenpapier Satino prestige  4-lagig Zellstoff-Mix hochweiss N"
                                },
                                "url_key": "toilettenpapier-satino-prestige-4-lagig-zellstoff-mix-hochweiss-n-159004303",
                                "redirect_url_key": [],
                                "main": true,
                                "short_description": null,
                                "description": null,
                                "name": "Toilettenpapier Satino prestige  4-lagig Zellstoff-Mix hochweiss N (4-Lagig, hochweiss, Zellstoffmix)",
                                "seo_title": "Toilettenpapier Satino prestige  4-lagig Zellstoff-Mix hochweiss N | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 1,
                                "categories": [
                                    {
                                        "id": 134,
                                        "name": "Hauswirtschaft",
                                        "url_key": "hauswirtschaft",
                                        "level": 0
                                    },
                                    {
                                        "id": 149,
                                        "name": "Waschraum",
                                        "url_key": "hauswirtschaft/waschraum",
                                        "level": 1
                                    },
                                    {
                                        "id": 152,
                                        "name": "Toilettenpapier",
                                        "url_key": "hauswirtschaft/waschraum/toilettenpapier",
                                        "level": 2
                                    }
                                ],
                                "sku": "159004303",
                                "variant_attributes": {
                                    "anzahl_lagen": "4-Lagig",
                                    "farbe": "hochweiss",
                                    "material": "Zellstoffmix"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [],
                                "variant_selector": [
                                    {
                                        "name": "Anzahl Lagen",
                                        "values": [
                                            {
                                                "name": "4-Lagig",
                                                "sku": "159004303",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Farbe",
                                        "values": [
                                            {
                                                "name": "hochweiss",
                                                "sku": "159004303",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Material",
                                        "values": [
                                            {
                                                "name": "Zellstoffmix",
                                                "sku": "159004303",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 7675,
                                        "qty": 1512,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "4000735323326",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 189
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 21
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 1512
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 7676,
                                                "qty": 21,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "4000735323319",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 9
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 72
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 7676,
                                        "qty": 72,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "4000735323319",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 9
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 72
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 7677,
                                                "qty": 9,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "4000735323302",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 8
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 7677,
                                        "qty": 8,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "4000735323302",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 8
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 8,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": false
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.45045,
                                        "tax_included": false,
                                        "original_value": 0.45045,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.45045,
                                        "tax_included": false,
                                        "original_value": 0.45045,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.405405,
                                        "tax_included": false,
                                        "original_value": 0.405405,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.495495,
                                        "tax_included": false,
                                        "original_value": 0.495495,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.54054,
                                        "tax_included": false,
                                        "original_value": 0.54054,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.675675,
                                        "tax_included": false,
                                        "original_value": 0.675675,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": null,
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "WEPA Professional GmbH",
                                    "product_code": "043030",
                                    "id": 29670
                                },
                                "main_group": {
                                    "id": 8,
                                    "name": "Hauswirtschaft"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 6965
                            },
                            "amount": {
                                "price": 0.27954,
                                "untaxed": 20.13,
                                "tax": 1.55001,
                                "total": 21.68,
                                "total_without_discount": 21.68
                            },
                            "qty": 72,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 72,
                            "packaging": {
                                "id": 7676,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "4000735323319",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 9
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 72
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 7676,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "4000735323319",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 1,
                                            "qty": 72,
                                            "name": "Piece",
                                            "is_unit": true,
                                            "barcode": null,
                                            "type_code": "Piece"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 642178,
                            "product": {
                                "objectID": 21238,
                                "model": {
                                    "name": "Kinderwindeln Libero Comfort"
                                },
                                "url_key": "kinderwindeln-libero-comfort",
                                "redirect_url_key": [
                                    "kinderwindeln-libero-comfort-105002581"
                                ],
                                "main": false,
                                "short_description": "<p><br></p>",
                                "description": "<p>Zuverlässig, unglaublich sicher und komfortabel: flexible und atmungsaktive Windeln für aktive Babys. </p><p><br></p><p><span style=\"color: rgb(0, 0, 0); font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit; text-align: inherit;\">[</span>105002551] Kinderwindeln Libero Comfort (3 (5-9kg))<br>Saugstärke 475ml</p><br>\n\n<p>[105002561] Kinderwindeln Libero Comfort (4 (7-11kg))<br>Saugstärke 555ml</p><br>\n\n<p>[105002571] Kinderwindeln Libero Comfort (5 (10-14kg))<br>Saugstärke 568ml</p><br>\n\n<p>[105003360] Kinderwindeln Libero Comfort (7 (16-26kg))<br>Saugstärke 763ml</p><br>",
                                "name": "Kinderwindeln Libero Comfort (7 (16-26kg), Ja, Libero Comfort)",
                                "seo_title": "Kinderwindeln Libero Comfort | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 5,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105003360",
                                "variant_attributes": {
                                    "grosse_(naturliche_zahl)": "7 (16-26kg)",
                                    "latexfrei": "Ja",
                                    "marke": "Libero Comfort"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_100_100-15566.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_300_300-15567.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_600_480-15568.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_1024_768-15569.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_100_100-219808.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_300_300-219810.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_600_480-219812.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_1024_768-219813.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "Grösse (natürliche Zahl)",
                                        "values": [
                                            {
                                                "name": "3 (5-9kg)",
                                                "sku": "105002551",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "4 (7-11kg)",
                                                "sku": "105002561",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "5 (10-14kg)",
                                                "sku": "105002571",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "6 (13-20kg)",
                                                "sku": "105002581",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "7 (16-26kg)",
                                                "sku": "105003360",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105003360",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Marke",
                                        "values": [
                                            {
                                                "name": "Libero Comfort",
                                                "sku": "105003360",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 60410,
                                        "qty": 4536,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541181028",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 216
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 36
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 4536
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 60409,
                                                "qty": 36,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "07322541117157",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 6
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 126
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 60409,
                                        "qty": 126,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "07322541117157",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 6
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 126
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 60408,
                                                "qty": 6,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541117140",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 21
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 60408,
                                        "qty": 21,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541117140",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 21
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 21,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.4394,
                                        "tax_included": false,
                                        "original_value": 0.4394,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.4394,
                                        "tax_included": false,
                                        "original_value": 0.4394,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.39546000000000003,
                                        "tax_included": false,
                                        "original_value": 0.39546000000000003,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.48334,
                                        "tax_included": false,
                                        "original_value": 0.48334,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.52728,
                                        "tax_included": false,
                                        "original_value": 0.52728,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.6591,
                                        "tax_included": false,
                                        "original_value": 0.6591,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541484471",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1050 - Volle Paletten)",
                                    "product_code": "8307",
                                    "id": 26462
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 4402
                            },
                            "amount": {
                                "price": 0.30449,
                                "untaxed": 38.37,
                                "tax": 2.9544900000000003,
                                "total": 41.32,
                                "total_without_discount": 41.32
                            },
                            "qty": 126,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 126,
                            "packaging": {
                                "id": 60409,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "07322541117157",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 6
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 126
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 60409,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "07322541117157",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 60408,
                                            "qty": 6,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541117140",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "count": 198,
                    "amount": {
                        "tax": 4.5045,
                        "untaxed": 58.5,
                        "total": 63
                    }
                },
                "amount": {
                    "tax": 4.5,
                    "untaxed": 58.5,
                    "total": 63,
                    "discount_total": 0,
                    "total_without_discount": 63,
                    "tax_without_shipping": 4.5,
                    "untaxed_without_shipping": 58.5,
                    "total_without_shipping": 63,
                    "total_without_shipping_without_discount": 63
                },
                "shipping": {
                    "address": {
                        "id": 58222,
                        "parent_id": 37264,
                        "type": "delivery",
                        "display_name": "Philipp Schefer",
                        "name": "Philipp Schefer",
                        "ref": "512961",
                        "street": "Stadlerstrasse 24b",
                        "street2": null,
                        "zip": "8182",
                        "city": "Hochfelden",
                        "phone": null,
                        "email": null,
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "address",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": null,
                        "enabled": true,
                        "industry_id": {
                            "id": 51,
                            "name": "Work Safety"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "amount": {
                        "tax": 0,
                        "untaxed": 0,
                        "total": 0
                    },
                    "selected_carrier": {
                        "id": 4,
                        "name": "Brauch Palette",
                        "code": null,
                        "description": null,
                        "type": null
                    }
                },
                "invoicing": {
                    "address": {
                        "id": 37264,
                        "parent_id": false,
                        "type": "contact",
                        "display_name": "Bruno Schefer (311)",
                        "name": "Bruno Schefer",
                        "ref": "311",
                        "street": "Erlenweg 8",
                        "street2": null,
                        "zip": "8704",
                        "city": "Herrliberg",
                        "phone": "+41 78 890 80 90",
                        "email": "bruno.schefer@cosanum.ch",
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "profile",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": {
                            "id": 37,
                            "name": "Herr"
                        },
                        "enabled": true,
                        "industry_id": {
                            "id": 74,
                            "name": "Cosanum - HCM"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    }
                },
                "expiration_date": false,
                "invoices": [
                    {
                        "id": 908809,
                        "name": "2021-4049694",
                        "date": "2021-10-31"
                    }
                ],
                "deliveries": [
                    {
                        "id": 588156,
                        "name": "SCH/OUTP/0050813",
                        "date": "2021-10-27T13:04:06"
                    }
                ],
                "from_shop": false
            },
            {
                "id": 121246,
                "state": "shipping_done",
                "state_label": "Fully shipped",
                "name": "SO0121245",
                "date": "2021-09-23T03:39:04",
                "client_order_ref": "Bruno Schefer",
                "step": {
                    "current": "cart_address",
                    "done": [
                        "cart_index",
                        "cart_address"
                    ]
                },
                "lines": {
                    "items": [
                        {
                            "id": 537182,
                            "product": {
                                "objectID": 5271,
                                "model": {
                                    "name": "Kinderwindeln Libero Baby Soft Newborn"
                                },
                                "url_key": "kinderwindeln-libero-baby-soft-newborn",
                                "redirect_url_key": [],
                                "main": false,
                                "short_description": null,
                                "description": "<p>[105002530] Kinderwindeln Libero Baby Soft Newborn (1 (2-5kg))<br>Windel für die speziellen Bedürfnisse von Neugeborenen: unglaublich komfortabel, super-saugfähig, wunderbar weich und flexibel. Saugstärke 258ml</p><br>\n\n<p>[105006332] Kinderwindeln Libero Baby Soft Newborn (2 (3-6kg))<br>Windel für die speziellen Bedürfnisse von Neugeborenen: unglaublich komfortabel, super-saugfähig, wunderbar weich und flexibel. Saugstärke 368ml</p><br>",
                                "name": "Kinderwindeln Libero Baby Soft Newborn (Ja, Libero Baby Soft Newborn, 2 (3-6kg))",
                                "seo_title": "Kinderwindeln Libero Baby Soft Newborn | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 2,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105006332",
                                "variant_attributes": {
                                    "latexfrei": "Ja",
                                    "marke": "Libero Baby Soft Newborn",
                                    "naturliche_zahlen": "2 (3-6kg)"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn_100_100-48958.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn_300_300-48959.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn_600_480-48960.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn_1024_768-48961.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105006332",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Marke",
                                        "values": [
                                            {
                                                "name": "Libero Baby Soft Newborn",
                                                "sku": "105006332",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Natürliche Zahlen",
                                        "values": [
                                            {
                                                "name": "1 (2-5kg)",
                                                "sku": "105002530",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "2 (3-6kg)",
                                                "sku": "105006332",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 6875,
                                        "qty": 5184,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": false,
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 144
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 24
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 5184
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 6876,
                                                "qty": 24,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322540694628",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 6
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 216
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 6876,
                                        "qty": 216,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322540694628",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 6
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 216
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 6877,
                                                "qty": 6,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322540694635",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 36
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 6877,
                                        "qty": 36,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322540694635",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 36
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 36,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2349,
                                        "tax_included": false,
                                        "original_value": 0.2349,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2349,
                                        "tax_included": false,
                                        "original_value": 0.2349,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.21141,
                                        "tax_included": false,
                                        "original_value": 0.21141,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.25839,
                                        "tax_included": false,
                                        "original_value": 0.25839,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.28188,
                                        "tax_included": false,
                                        "original_value": 0.28188,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.35235,
                                        "tax_included": false,
                                        "original_value": 0.35235,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "out_of_stock"
                                    }
                                },
                                "barcode": "7322540728309",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1050 - Volle Paletten)",
                                    "product_code": "6332",
                                    "id": 9715
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {
                                    "code": "phaseout",
                                    "label": "Auslaufartikel"
                                },
                                "mto": false,
                                "links": {
                                    "replacement": [
                                        {
                                            "id": 29915
                                        }
                                    ]
                                },
                                "id": 5677
                            },
                            "amount": {
                                "price": 0.1628,
                                "untaxed": 35.16,
                                "tax": 2.70732,
                                "total": 37.87,
                                "total_without_discount": 37.87
                            },
                            "qty": 216,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 216,
                            "packaging": {
                                "id": 6876,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322540694628",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 6
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 216
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 6876,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322540694628",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 6877,
                                            "qty": 6,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322540694635",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 537183,
                            "product": {
                                "objectID": 21235,
                                "model": {
                                    "name": "Kinderwindeln Libero Comfort"
                                },
                                "url_key": "kinderwindeln-libero-comfort",
                                "redirect_url_key": [
                                    "kinderwindeln-libero-comfort-105002581"
                                ],
                                "main": false,
                                "short_description": "<p><br></p>",
                                "description": "<p>Zuverlässig, unglaublich sicher und komfortabel: flexible und atmungsaktive Windeln für aktive Babys. </p><p><br></p><p><span style=\"color: rgb(0, 0, 0); font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit; text-align: inherit;\">[</span>105002551] Kinderwindeln Libero Comfort (3 (5-9kg))<br>Saugstärke 475ml</p><br>\n\n<p>[105002561] Kinderwindeln Libero Comfort (4 (7-11kg))<br>Saugstärke 555ml</p><br>\n\n<p>[105002571] Kinderwindeln Libero Comfort (5 (10-14kg))<br>Saugstärke 568ml</p><br>\n\n<p>[105003360] Kinderwindeln Libero Comfort (7 (16-26kg))<br>Saugstärke 763ml</p><br>",
                                "name": "Kinderwindeln Libero Comfort (4 (7-11kg), Ja, Libero Comfort)",
                                "seo_title": "Kinderwindeln Libero Comfort | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 5,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105002561",
                                "variant_attributes": {
                                    "grosse_(naturliche_zahl)": "4 (7-11kg)",
                                    "latexfrei": "Ja",
                                    "marke": "Libero Comfort"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_100_100-219800.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_300_300-219802.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_600_480-219804.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_1024_768-219805.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_100_100-15566.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_300_300-15567.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_600_480-15568.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-comfort_1024_768-15569.jpg",
                                            "alt": "Kinderwindeln Libero Comfort",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "Grösse (natürliche Zahl)",
                                        "values": [
                                            {
                                                "name": "3 (5-9kg)",
                                                "sku": "105002551",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "4 (7-11kg)",
                                                "sku": "105002561",
                                                "available": true,
                                                "selected": true
                                            },
                                            {
                                                "name": "5 (10-14kg)",
                                                "sku": "105002571",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "6 (13-20kg)",
                                                "sku": "105002581",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "7 (16-26kg)",
                                                "sku": "105003360",
                                                "available": true,
                                                "selected": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105002561",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Marke",
                                        "values": [
                                            {
                                                "name": "Libero Comfort",
                                                "sku": "105002561",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 60402,
                                        "qty": 7488,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541175188",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 288
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 36
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 7488
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 60401,
                                                "qty": 36,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322541116839",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 8
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 208
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 60401,
                                        "qty": 208,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322541116839",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 8
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 208
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 60400,
                                                "qty": 8,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541116822",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 26
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 60400,
                                        "qty": 26,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541116822",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 26
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 26,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2873,
                                        "tax_included": false,
                                        "original_value": 0.2873,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2873,
                                        "tax_included": false,
                                        "original_value": 0.2873,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.25857,
                                        "tax_included": false,
                                        "original_value": 0.25857,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.31603,
                                        "tax_included": false,
                                        "original_value": 0.31603,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.34476,
                                        "tax_included": false,
                                        "original_value": 0.34476,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.43095,
                                        "tax_included": false,
                                        "original_value": 0.43095,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541484440",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1050 - Volle Paletten)",
                                    "product_code": "6319-50 / 8303",
                                    "id": 26460
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 4399
                            },
                            "amount": {
                                "price": 0.19811,
                                "untaxed": 41.21,
                                "tax": 3.1731700000000003,
                                "total": 44.38,
                                "total_without_discount": 44.38
                            },
                            "qty": 208,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 208,
                            "packaging": {
                                "id": 60401,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322541116839",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 8
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 208
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 60401,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322541116839",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 60400,
                                            "qty": 8,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541116822",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 537188,
                            "product": {
                                "objectID": 14051,
                                "model": {
                                    "name": "Kinderwindeln Libero Baby Soft Newborn  N"
                                },
                                "url_key": "kinderwindeln-libero-baby-soft-newborn-n",
                                "redirect_url_key": [],
                                "main": true,
                                "short_description": "<p><br></p>",
                                "description": "<p>Windel für die speziellen Bedürfnisse von Neugeborenen: unglaublich komfortabel, super-saugfähig, wunderbar weich und flexibel. </p><p><br></p><p>[105002530] Kinderwindeln Libero Baby Soft Newborn (1 (2-5kg))</p><p>Saugstärke 258ml</p><p><br></p><p><br></p><p>[105006332] Kinderwindeln Libero Baby Soft Newborn (2 (3-6kg))</p><p>Saugstärke 368ml</p><p><br></p>",
                                "name": "Kinderwindeln Libero Baby Soft Newborn  N (Ja, 1 (2-5kg))",
                                "seo_title": "Kinderwindeln Libero Baby Soft Newborn  N | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 2,
                                "categories": [
                                    {
                                        "id": 105,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz",
                                        "level": 0
                                    },
                                    {
                                        "id": 106,
                                        "name": "Inkontinenz",
                                        "url_key": "inkontinenz/inkontinenz",
                                        "level": 1
                                    },
                                    {
                                        "id": 111,
                                        "name": "Inkontinenz-Einlagen mit Klebelaschen",
                                        "url_key": "inkontinenz/inkontinenz/inkontinenz-einlagen-mit-klebelaschen",
                                        "level": 2
                                    }
                                ],
                                "sku": "105008417",
                                "variant_attributes": {
                                    "latexfrei": "Ja",
                                    "naturliche_zahlen": "1 (2-5kg)"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-209799.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-209800.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-209801.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-209802.png",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_100_100-219874.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_300_300-219875.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_600_480-219876.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/kinderwindeln-libero-baby-soft-newborn-n_1024_768-219877.jpg",
                                            "alt": "Kinderwindeln Libero Baby Soft Newborn  N",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "latexfrei",
                                        "values": [
                                            {
                                                "name": "Ja",
                                                "sku": "105008417",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Natürliche Zahlen",
                                        "values": [
                                            {
                                                "name": "1 (2-5kg)",
                                                "sku": "105008417",
                                                "available": true,
                                                "selected": true
                                            },
                                            {
                                                "name": "2 (3-6kg)",
                                                "sku": "105008419",
                                                "available": true,
                                                "selected": false
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 53809,
                                        "qty": 5760,
                                        "name": "Pallet",
                                        "is_unit": false,
                                        "barcode": "7322541270692",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 240
                                            },
                                            {
                                                "code": "TU",
                                                "qty": 60
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 5760
                                            }
                                        ],
                                        "code": "PL",
                                        "contained": [
                                            {
                                                "id": 53808,
                                                "qty": 60,
                                                "name": "Transport Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197579",
                                                "qty_per_type": [
                                                    {
                                                        "code": "CU",
                                                        "qty": 4
                                                    },
                                                    {
                                                        "code": "Piece",
                                                        "qty": 96
                                                    }
                                                ],
                                                "code": "TU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53808,
                                        "qty": 96,
                                        "name": "Transport Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197579",
                                        "qty_per_type": [
                                            {
                                                "code": "CU",
                                                "qty": 4
                                            },
                                            {
                                                "code": "Piece",
                                                "qty": 96
                                            }
                                        ],
                                        "code": "TU",
                                        "contained": [
                                            {
                                                "id": 53807,
                                                "qty": 4,
                                                "name": "Consumer Unit",
                                                "is_unit": false,
                                                "barcode": "7322541197562",
                                                "qty_per_type": [
                                                    {
                                                        "code": "Piece",
                                                        "qty": 24
                                                    }
                                                ],
                                                "code": "CU"
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 53807,
                                        "qty": 24,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": "7322541197562",
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 24
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 24,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 0.2159,
                                        "tax_included": false,
                                        "original_value": 0.2159,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 0.2159,
                                        "tax_included": false,
                                        "original_value": 0.2159,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 0.19431,
                                        "tax_included": false,
                                        "original_value": 0.19431,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 0.23749,
                                        "tax_included": false,
                                        "original_value": 0.23749,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 0.25908000000000003,
                                        "tax_included": false,
                                        "original_value": 0.25908000000000003,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 0.32385,
                                        "tax_included": false,
                                        "original_value": 0.32385,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_stock"
                                    }
                                },
                                "barcode": "7322541413969",
                                "is_medical": false,
                                "migel_number": null,
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Essity Switzerland AG - Tena (1051 - Mischpalett)",
                                    "product_code": "8417",
                                    "id": 22133
                                },
                                "main_group": {
                                    "id": 5,
                                    "name": "Inkontinenz"
                                },
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 8,
                                    "name": "Non medical"
                                },
                                "pharmacode": null,
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 29914
                            },
                            "amount": {
                                "price": 0.14959,
                                "untaxed": 14.36,
                                "tax": 1.10572,
                                "total": 15.47,
                                "total_without_discount": 15.47
                            },
                            "qty": 96,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 96,
                            "packaging": {
                                "id": 53808,
                                "name": "Transport Unit",
                                "code": "TU",
                                "barcode": "7322541197579",
                                "qty_per_type": [
                                    {
                                        "code": "CU",
                                        "qty": 4
                                    },
                                    {
                                        "code": "Piece",
                                        "qty": 96
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 53808,
                                    "qty": 1,
                                    "name": "Transport Unit",
                                    "is_unit": false,
                                    "barcode": "7322541197579",
                                    "type_code": "TU",
                                    "contained": [
                                        {
                                            "id": 53807,
                                            "qty": 4,
                                            "name": "Consumer Unit",
                                            "is_unit": false,
                                            "barcode": "7322541197562",
                                            "type_code": "CU"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "count": 520,
                    "amount": {
                        "tax": 6.98621,
                        "untaxed": 90.73,
                        "total": 97.72
                    }
                },
                "amount": {
                    "tax": 6.99,
                    "untaxed": 90.73,
                    "total": 97.72,
                    "discount_total": 0,
                    "total_without_discount": 97.72,
                    "tax_without_shipping": 6.99,
                    "untaxed_without_shipping": 90.73,
                    "total_without_shipping": 97.72,
                    "total_without_shipping_without_discount": 97.72
                },
                "shipping": {
                    "address": {
                        "id": 58221,
                        "parent_id": 37264,
                        "type": "delivery",
                        "display_name": "Nina Ehrler",
                        "name": "Nina Ehrler",
                        "ref": "529862",
                        "street": "Breitensteinstrasse 45",
                        "street2": null,
                        "zip": "8037",
                        "city": "Zürich",
                        "phone": null,
                        "email": null,
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "address",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": null,
                        "enabled": true,
                        "industry_id": {
                            "id": 51,
                            "name": "Work Safety"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "amount": {
                        "tax": 0,
                        "untaxed": 0,
                        "total": 0
                    },
                    "selected_carrier": {
                        "id": 4,
                        "name": "Brauch Palette",
                        "code": null,
                        "description": null,
                        "type": null
                    }
                },
                "invoicing": {
                    "address": {
                        "id": 37264,
                        "parent_id": false,
                        "type": "contact",
                        "display_name": "Bruno Schefer (311)",
                        "name": "Bruno Schefer",
                        "ref": "311",
                        "street": "Erlenweg 8",
                        "street2": null,
                        "zip": "8704",
                        "city": "Herrliberg",
                        "phone": "+41 78 890 80 90",
                        "email": "bruno.schefer@cosanum.ch",
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "profile",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": {
                            "id": 37,
                            "name": "Herr"
                        },
                        "enabled": true,
                        "industry_id": {
                            "id": 74,
                            "name": "Cosanum - HCM"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    }
                },
                "expiration_date": false,
                "invoices": [
                    {
                        "id": 892972,
                        "name": "2021-4043320",
                        "date": "2021-09-30"
                    }
                ],
                "deliveries": [
                    {
                        "id": 502193,
                        "name": "SCH/OUTP/0043673",
                        "date": "2021-09-23T10:27:16"
                    }
                ],
                "from_shop": true
            },
            {
                "id": 108395,
                "state": "shipping_done",
                "state_label": "Fully shipped",
                "name": "SO0108394",
                "date": "2021-09-01T06:49:40",
                "client_order_ref": "",
                "step": {
                    "current": false,
                    "done": []
                },
                "lines": {
                    "items": [
                        {
                            "id": 479327,
                            "product": {
                                "objectID": 20412,
                                "model": {
                                    "name": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze"
                                },
                                "url_key": "strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze",
                                "redirect_url_key": [],
                                "main": false,
                                "short_description": null,
                                "description": null,
                                "name": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze (schwarz, geschlossene Fussspitze, II normal, CCL2, mediven elegance, Nein)",
                                "seo_title": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze | ",
                                "meta_keywords": null,
                                "meta_description": null,
                                "variant_count": 11,
                                "categories": [
                                    {
                                        "id": 184,
                                        "name": "Kompression",
                                        "url_key": "kompression",
                                        "level": 0
                                    },
                                    {
                                        "id": 185,
                                        "name": "Kompressionstherapie",
                                        "url_key": "kompression/kompressionstherapie",
                                        "level": 1
                                    },
                                    {
                                        "id": 187,
                                        "name": "Kompressionsstrümpfe und -Bekleidung",
                                        "url_key": "kompression/kompressionstherapie/kompressionsstrumpfe-und-bekleidung",
                                        "level": 2
                                    }
                                ],
                                "sku": "248002325",
                                "variant_attributes": {
                                    "farbe": "schwarz",
                                    "fussspitze": "geschlossene Fussspitze",
                                    "grosse_(romisch)": "II normal",
                                    "kompressionsklasse": "CCL2",
                                    "marke": "mediven elegance",
                                    "steril": "Nein"
                                },
                                "manufactured_for_partners": [
                                    "_NOVALUE_"
                                ],
                                "images": [
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_100_100-122786.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_300_300-122788.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_600_480-122789.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_1024_768-122790.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        }
                                    },
                                    {
                                        "small": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_100_100-122792.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        },
                                        "medium": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_300_300-122794.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        },
                                        "large": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_600_480-122796.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        },
                                        "xlarge": {
                                            "src": "https://cdn.cosanum.ch/shop/strumpfhose-fur-schwangere-mediven-elegance-ccl2-geschlossene-fussspitze_1024_768-122798.jpg",
                                            "alt": "Strumpfhose für Schwangere mediven elegance CCL2 geschlossene Fussspitze",
                                            "tag": ""
                                        }
                                    }
                                ],
                                "variant_selector": [
                                    {
                                        "name": "Farbe",
                                        "values": [
                                            {
                                                "name": "caramel",
                                                "sku": "248002321",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "schwarz",
                                                "sku": "248002325",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Fussspitze",
                                        "values": [
                                            {
                                                "name": "geschlossene Fussspitze",
                                                "sku": "248002325",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Grösse (römisch)",
                                        "values": [
                                            {
                                                "name": "I kurz",
                                                "sku": "248003117",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "II kurz",
                                                "sku": "248003127",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "II normal",
                                                "sku": "248002325",
                                                "available": true,
                                                "selected": true
                                            },
                                            {
                                                "name": "III kurz",
                                                "sku": "248003137",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "III normal",
                                                "sku": "248002365",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "IV kurz",
                                                "sku": "248003138",
                                                "available": true,
                                                "selected": false
                                            },
                                            {
                                                "name": "V normal",
                                                "sku": "248002369",
                                                "available": true,
                                                "selected": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Kompressionsklasse",
                                        "values": [
                                            {
                                                "name": "CCL2",
                                                "sku": "248002325",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Marke",
                                        "values": [
                                            {
                                                "name": "mediven elegance",
                                                "sku": "248002325",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "steril",
                                        "values": [
                                            {
                                                "name": "Nein",
                                                "sku": "248002325",
                                                "available": true,
                                                "selected": true
                                            }
                                        ]
                                    }
                                ],
                                "packaging": [
                                    {
                                        "id": 56093,
                                        "qty": 1,
                                        "name": "Consumer Unit",
                                        "is_unit": false,
                                        "barcode": false,
                                        "qty_per_type": [
                                            {
                                                "code": "Piece",
                                                "qty": 1
                                            }
                                        ],
                                        "code": "CU",
                                        "contained": [
                                            {
                                                "id": 1,
                                                "qty": 1,
                                                "name": "Stück",
                                                "is_unit": true,
                                                "barcode": null
                                            }
                                        ],
                                        "can_be_sold": true
                                    },
                                    {
                                        "id": 1,
                                        "qty": 1,
                                        "name": "Stück",
                                        "is_unit": true,
                                        "barcode": null,
                                        "contained": null,
                                        "can_be_sold": false
                                    }
                                ],
                                "sell_only_by_packaging": true,
                                "price": {
                                    "default": {
                                        "value": 95.55556,
                                        "tax_included": false,
                                        "original_value": 95.55556,
                                        "discount": 0
                                    },
                                    "factor1.0": {
                                        "value": 95.55556,
                                        "tax_included": false,
                                        "original_value": 95.55556,
                                        "discount": 0
                                    },
                                    "factor0.9": {
                                        "value": 86.000004,
                                        "tax_included": false,
                                        "original_value": 86.000004,
                                        "discount": 0
                                    },
                                    "factor1.1": {
                                        "value": 105.111116,
                                        "tax_included": false,
                                        "original_value": 105.111116,
                                        "discount": 0
                                    },
                                    "factor1.2": {
                                        "value": 114.666672,
                                        "tax_included": false,
                                        "original_value": 114.666672,
                                        "discount": 0
                                    },
                                    "factor1.5": {
                                        "value": 143.33334,
                                        "tax_included": false,
                                        "original_value": 143.33334,
                                        "discount": 0
                                    }
                                },
                                "stock": {
                                    "global": {
                                        "state": "in_limited_stock"
                                    }
                                },
                                "barcode": "4051526356559",
                                "is_medical": false,
                                "migel_number": "17.02.01.09.1",
                                "brand": null,
                                "supplierinfo": {
                                    "name": "Medi GmbH & Co. KG",
                                    "product_code": "220512",
                                    "id": 30968
                                },
                                "main_group": {},
                                "is_dangerous_good": false,
                                "is_dangerous_waste": false,
                                "media": [],
                                "medical_class": {
                                    "id": 1,
                                    "name": "CE Klasse I"
                                },
                                "pharmacode": "5810005",
                                "status": {},
                                "mto": false,
                                "links": {},
                                "id": 11413
                            },
                            "amount": {
                                "price": 42.8,
                                "untaxed": 42.8,
                                "tax": 3.2956000000000003,
                                "total": 46.1,
                                "total_without_discount": 46.1
                            },
                            "qty": 1,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 1,
                            "packaging": {
                                "id": 56093,
                                "name": "Consumer Unit",
                                "code": "CU",
                                "barcode": false,
                                "qty_per_type": [
                                    {
                                        "code": "Piece",
                                        "qty": 1
                                    }
                                ]
                            },
                            "packaging_qty": 1,
                            "packaging_by_qty": [
                                {
                                    "id": 56093,
                                    "qty": 1,
                                    "name": "Consumer Unit",
                                    "is_unit": false,
                                    "barcode": false,
                                    "type_code": "CU",
                                    "contained": [
                                        {
                                            "id": 1,
                                            "qty": 1,
                                            "name": "Piece",
                                            "is_unit": true,
                                            "barcode": null,
                                            "type_code": "Piece"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 479343,
                            "product": {},
                            "amount": {
                                "price": 0,
                                "untaxed": 0,
                                "tax": 0,
                                "total": 0,
                                "total_without_discount": 0
                            },
                            "qty": 0,
                            "discount": {
                                "rate": 0,
                                "value": 0
                            },
                            "replacement_line_id": false,
                            "qty_delivered": 0,
                            "packaging": null,
                            "packaging_qty": 0,
                            "packaging_by_qty": []
                        }
                    ],
                    "count": 1,
                    "amount": {
                        "tax": 3.2956000000000003,
                        "untaxed": 42.8,
                        "total": 46.1
                    }
                },
                "amount": {
                    "tax": 3.3,
                    "untaxed": 42.8,
                    "total": 46.1,
                    "discount_total": 0,
                    "total_without_discount": 46.1,
                    "tax_without_shipping": 3.3000000000000003,
                    "untaxed_without_shipping": 42.800000000000004,
                    "total_without_shipping": 46.1,
                    "total_without_shipping_without_discount": 46.1
                },
                "shipping": {
                    "address": {
                        "id": 78140,
                        "parent_id": false,
                        "type": "delivery",
                        "display_name": "Gotschna Sport in Klosters (C14792)",
                        "name": "Gotschna Sport in Klosters",
                        "ref": "C14792",
                        "street": "c/o Manuela",
                        "street2": "Alte Bahnhofstrasse 5",
                        "zip": "7250",
                        "city": "Klosters",
                        "phone": null,
                        "email": null,
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "profile",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": null,
                        "enabled": false,
                        "industry_id": null,
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "amount": {
                        "tax": 0,
                        "untaxed": 0,
                        "total": 0
                    },
                    "selected_carrier": {
                        "id": 4,
                        "name": "Brauch Palette",
                        "code": null,
                        "description": null,
                        "type": null
                    }
                },
                "invoicing": {
                    "address": {
                        "id": 37264,
                        "parent_id": false,
                        "type": "contact",
                        "display_name": "Bruno Schefer (311)",
                        "name": "Bruno Schefer",
                        "ref": "311",
                        "street": "Erlenweg 8",
                        "street2": null,
                        "zip": "8704",
                        "city": "Herrliberg",
                        "phone": "+41 78 890 80 90",
                        "email": "bruno.schefer@cosanum.ch",
                        "function": null,
                        "opt_in": true,
                        "opt_out": false,
                        "vat": null,
                        "state": null,
                        "country": {
                            "id": 43,
                            "name": "Switzerland",
                            "code": "CH"
                        },
                        "address_type": "profile",
                        "is_company": true,
                        "lang": "de_DE",
                        "title": {
                            "id": 37,
                            "name": "Herr"
                        },
                        "enabled": true,
                        "industry_id": {
                            "id": 74,
                            "name": "Cosanum - HCM"
                        },
                        "access": {
                            "read": true,
                            "update": true,
                            "delete": true
                        }
                    }
                },
                "expiration_date": false,
                "invoices": [
                    {
                        "id": 892972,
                        "name": "2021-4043320",
                        "date": "2021-09-30"
                    }
                ],
                "deliveries": [
                    {
                        "id": 445953,
                        "name": "SCH/OUTP/0038741",
                        "date": "2021-09-01T08:59:02"
                    }
                ],
                "from_shop": false
            }
        ]
    }
    createNewOrder() {
        return {
            "id": demotools.getRandomInt(),
            "state": "shipping_done",
            "state_label": "Fully shipped",
            "name": "DEMO ORDER",
            "date": new Date(),
            "client_order_ref": "Bruno Schefer",
            "step": {
                "current": "cart_address",
                "done": [
                    "cart_index",
                    "cart_address"
                ]
            },
            "lines": [],
            "amount": {
                "tax": 0,
                "untaxed": 0,
                "total": 0,
                "discount_total": 0,
                "total_without_discount": 0,
                "tax_without_shipping": 0,
                "untaxed_without_shipping": 0,
                "total_without_shipping": 0,
                "total_without_shipping_without_discount": 0
            },
            "shipping": {
                "address": {
                    "id": 58221,
                    "parent_id": 37264,
                    "type": "delivery",
                    "display_name": "Nina Ehrler",
                    "name": "Nina Ehrler",
                    "ref": "529862",
                    "street": "Breitensteinstrasse 45",
                    "street2": null,
                    "zip": "8037",
                    "city": "Zürich",
                    "phone": null,
                    "email": null,
                    "function": null,
                    "opt_in": true,
                    "opt_out": false,
                    "vat": null,
                    "state": null,
                    "country": {
                        "id": 43,
                        "name": "Switzerland",
                        "code": "CH"
                    },
                    "address_type": "address",
                    "is_company": true,
                    "lang": "de_DE",
                    "title": null,
                    "enabled": true,
                    "industry_id": {
                        "id": 51,
                        "name": "Work Safety"
                    },
                    "access": {
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                "amount": {
                    "tax": 0,
                    "untaxed": 0,
                    "total": 0
                },
                "selected_carrier": {
                    "id": 4,
                    "name": "Brauch Palette",
                    "code": null,
                    "description": null,
                    "type": null
                }
            },
            "invoicing": {
                "address": {
                    "id": 37264,
                    "parent_id": false,
                    "type": "contact",
                    "display_name": "Bruno Schefer (311)",
                    "name": "Bruno Schefer",
                    "ref": "311",
                    "street": "Erlenweg 8",
                    "street2": null,
                    "zip": "8704",
                    "city": "Herrliberg",
                    "phone": "+41 78 890 80 90",
                    "email": "bruno.schefer@cosanum.ch",
                    "function": null,
                    "opt_in": true,
                    "opt_out": false,
                    "vat": null,
                    "state": null,
                    "country": {
                        "id": 43,
                        "name": "Switzerland",
                        "code": "CH"
                    },
                    "address_type": "profile",
                    "is_company": true,
                    "lang": "de_DE",
                    "title": {
                        "id": 37,
                        "name": "Herr"
                    },
                    "enabled": true,
                    "industry_id": {
                        "id": 74,
                        "name": "Cosanum - HCM"
                    },
                    "access": {
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            },
            "expiration_date": false,
            "invoices": [
                {
                    "id": 927542,
                    "name": "2021-4056995",
                    "date": "2021-11-30"
                }
            ],
            "deliveries": [
                {
                    "id": 701991,
                    "name": "SCH/OUTP/0057772",
                    "date": "2021-11-29T16:17:39"
                },
                {
                    "id": 702131,
                    "name": "SCH/OUTP/0057788",
                    "date": "2021-12-01T05:50:25"
                }
            ],
            "from_shop": true
        }
    }
}
