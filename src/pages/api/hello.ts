// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { IPage } from "../../model/page_builder";

const page: IPage = {
  "id": "7158",
  "name": "Homepage",
  "onLoadScript": null,
  "meta": {
    keywords: "",
    robots: "",
    tags: "",
  },
  "openGraph": {
    image: "",
    title: "",
    description: "",
  },
  "password": null,
  "status": 1,
  "rows": [
    {
      "id": "2qqRceHXWjKJdAK3",
      "title": "New Row",
      "status": 1,
      "layout": "6+6",
      "cells": [
        {
          "id": "hBVh0OBdNStS5j8Z",
          "status": 1,
          "rows": [],
          "components": [
            {
              "id": "DFbDj8wfsv34N46p",
              "name": "A Sample button",
              "thumbnail": "assets/img/builder-components/image.svg",
              "category": 1,
              "title": "Header",
              "description": "",
              "attributes": '{"children": "Hey there", "outline": true}',
              "identifier": "Button"
            },
          ],
          "attributes": {
            "general": null,
            "style": null
          }
        },
        {
          "id": "hBVh0OBdNStS5j8Z",
          "status": 1,
          "rows": [],
          "components": [
            {
              "id": "DFbDj8wfsv34N46p",
              "name": "A Sample button",
              "thumbnail": "assets/img/builder-components/image.svg",
              "category": 1,
              "title": "Header",
              "description": "",
              "attributes": '{"src": "https://ahsan-j.com/img/avatar.webp"}',
              "identifier": "img"
            },
          ],
          "attributes": {
            "general": null,
            "style": null
          }
        },
      ],
      "attributes": {
        "general": null,
        "style": null
      }
    },
    {
      "id": "C52NUWz8YHMTaBC8",
      "title": "New Row",
      "status": 1,
      "layout": "6+6",
      "cells": [
        {
          "id": "84Qrd47j9WzrUgVe",
          "status": 1,
          "rows": [
            {
              "id": "nLfqrBMosBf55I2A",
              "title": "New Row",
              "status": 1,
              "layout": "12",
              "cells": [
                {
                  "id": "c4bFODErHbPhTJni",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "gVQ5gfRCP7usMjFG",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060671222301482.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                }
              ],
              "attributes": {
                "general": null,
                "style": null
              }
            },
            {
              "id": "hVnGluy9r9o07iob",
              "title": "New Row",
              "status": 1,
              "layout": "6+6",
              "cells": [
                {
                  "id": "n5OmuveWtysseH03",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "aUVrzZkW2e4BSD8n",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Hotel_en637060668833154081.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                },
                {
                  "id": "ySUAxMSmVMF8rBE2",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "kEr1rNztXeuf1mbU",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060668949957302.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                }
              ],
              "attributes": {
                "general": null,
                "style": null
              }
            }
          ],
          "components": [],
          "attributes": {
            "general": null,
            "style": null
          }
        },
        {
          "id": "YDx3wJea6FQ7zak9",
          "status": 1,
          "rows": [],
          "components": [
            {
              "id": "8EDJBNLbI1pxcB2r",
              "category": 2,
              "name": "Search_Widget",
              "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidget636969787047210363.png",
              "title": "Search Widget",
              "description": "",
              "attributes": "{\"types\":[{\"value\":\"trvflightsearch\",\"label\":\"Flight\",\"checked\":true},{\"value\":\"trvhotelsearch\",\"label\":\"Hotel\",\"checked\":true},{\"value\":\"trvtoursearch\",\"label\":\"Tour\",\"checked\":true},{\"value\":\"trvpackagesearch\",\"label\":\"Package\",\"checked\":true}],\"title\":\"What can we book for you for the day?\",\"color\":\"PrimaryColor\",\"trvflightsearch\":{\"origin\":{},\"destination\":{},\"blackoutDateRange\":[],\"travelDates\":{},\"adult\":{},\"child\":{},\"infant\":{}},\"trvhotelsearch\":{\"destination\":{\"inclusion\":[],\"exclusion\":[]},\"checkInCheckOut\":{},\"blackOutDateRange\":[],\"hotelPassengers\":[{\"adult\":{},\"child\":{},\"roomNumber\":null}]},\"trvtoursearch\":{\"destination\":{\"inclusion\":[],\"exclusion\":[]}},\"trvpackagesearch\":{\"trvflightsearch\":{\"origin\":{},\"destination\":{},\"blackoutDateRange\":[],\"travelDates\":{},\"adult\":{},\"child\":{},\"infant\":{},\"hotelPassengers\":[{\"adult\":{},\"child\":{}}]},\"trvhotelsearch\":{\"destination\":{\"inclusion\":[],\"exclusion\":[]},\"checkInCheckOut\":{},\"hotelPassengers\":[{\"adult\":{},\"child\":{}}]}}}",
              "identifier": "Search_Widget"
            }
          ],
          "attributes": {
            "general": null,
            "style": null
          }
        }
      ],
      "attributes": {
        "general": {
          "customClass": null,
          "customId": null,
          "includeGutter": false,
          "isFluidLayout": false,
          "title": null
        },
        "style": {
          "backgroundImage": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/adventure-beach-beautiful-459339637060678974721843.jpg",
          "backgroundPosition": null,
          "padding": null,
          "margin": null
        }
      }
    },
    {
      "id": "LaEe6Fi7MsgXN6FT",
      "title": "New Row",
      "status": 1,
      "layout": "6+6",
      "cells": [
        {
          "id": "pNvXsxVaucPnRAnm",
          "status": 1,
          "rows": [
            {
              "id": "Eq6iUe4IqgsCAKwI",
              "title": "New Row",
              "status": 1,
              "layout": "12",
              "cells": [
                {
                  "id": "Nd7KwDyhjiMAU6eH",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "sLybhjltouBMRI3M",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageLink\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060671222301482.jpg\",\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060679598707041.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                }
              ],
              "attributes": {
                "general": null,
                "style": null
              }
            },
            {
              "id": "KjOhVdEi453RKBFw",
              "title": "New Row",
              "status": 1,
              "layout": "6+6",
              "cells": [
                {
                  "id": "kxknkVg4hGWasvFj",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "FK5KlALnrE4vIm0l",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageLink\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Hotel_en637060668833154081.jpg\",\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Side_Banner_EN636973879376347069--637060679740472035.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                },
                {
                  "id": "73N0c5mXCL2NvbZW",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "fBiNLSvLDJ3Qkyss",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageLink\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Hotel_en637060668833154081.jpg\",\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060679844680450.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                }
              ],
              "attributes": {
                "general": null,
                "style": null
              }
            }
          ],
          "components": [],
          "attributes": {
            "general": null,
            "style": null
          }
        },
        {
          "id": "JlPHcmLiYNcdtvG1",
          "status": 1,
          "rows": [
            {
              "id": "FjKjDWjNCu47zY5d",
              "title": "New Row",
              "status": 1,
              "layout": "6+6",
              "cells": [
                {
                  "id": "oQggxt79z7V3dl8U",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "bINHZWjo9ASV3rqO",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageLink\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Hotel_en637060668833154081.jpg\",\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Hotel_en637060679942189144.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                },
                {
                  "id": "PxYGFlNEnV8CC8WZ",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "pCxqTLXxJmKguNVD",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageLink\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Hotel_en637060668833154081.jpg\",\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Side_Banner_EN636973879376347069--637060680173378256.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                }
              ],
              "attributes": {
                "general": null,
                "style": null
              }
            },
            {
              "id": "KK8mYn8VojYcVAYk",
              "title": "New Row",
              "status": 1,
              "layout": "12",
              "cells": [
                {
                  "id": "GBBZl9O0GISS0ul1",
                  "status": 1,
                  "rows": [],
                  "components": [
                    {
                      "id": "P79l8FAhYsrUo1Yn",
                      "category": 1,
                      "name": "image",
                      "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/SearchWidgetPageBuilder636969764319951912.JPG",
                      "title": "Image",
                      "description": "",
                      "attributes": "{\"translations\":[],\"imageLink\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060671222301482.jpg\",\"imageUrl\":\"https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/Webbanner-EN636972145661938192637060680296597305.jpg\"}",
                      "identifier": "image"
                    }
                  ],
                  "attributes": {
                    "general": null,
                    "style": null
                  }
                }
              ],
              "attributes": {
                "general": null,
                "style": null
              }
            }
          ],
          "components": [],
          "attributes": {
            "general": null,
            "style": null
          }
        }
      ],
      "attributes": {
        "general": {
          "customClass": null,
          "customId": null,
          "includeGutter": false,
          "isFluidLayout": false,
          "title": "Amazing Holiday Deals"
        },
        "style": {
          "backgroundColor": null,
          "backgroundImageUrl": null,
          "backgroundSize": null,
          "backgroundPosition": null,
          "padding": null,
          "margin": null
        }
      }
    },
    {
      "id": "TqfR3tsIMsMhBgL6",
      "title": "New Row",
      "status": 1,
      "layout": "12",
      "cells": [
        {
          "id": "RZzhOU4bLtfZoH94",
          "status": 1,
          "rows": [],
          "components": [
            {
              "id": "K4iIvSVuBNPgEzQ9",
              "category": 1,
              "name": "termsandconditions",
              "thumbnail": "https://s3.ap-south-1.amazonaws.com/arjaa/uploads/0/Logo/terms-and-condistions-900x588636969761102468903.jpg",
              "title": "Terms And Conditions",
              "description": "",
              "attributes": "{\"translations\":[{\"languageCode\":\"ar-SA\",\"text\":\"<p style=\\\"margin-right: 0px; margin-bottom: 10px; margin-left: 0px; color: rgb(53, 90, 105); font-family: &quot;Open Sans&quot;; font-size: 13px;\\\">Terms &amp; Conditions:&nbsp;</p><ul style=\\\"margin-bottom: 10px; color: rgb(53, 90, 105); font-family: &quot;Open Sans&quot;; font-size: 13px;\\\"><li>This offer is valid for Samba credit cardholders only</li><li>0% Taqseet applies on any bookings made through holidaysbysaudia.com or through our dedicated Call Centre&nbsp;</li><li>To convert the transaction to 0% Taqseet (installments with 0% markup and no fees), guest must contact SambaPhone two days after the tickets&nbsp;<g class=\\\"gr_ gr_8 gr-alert gr_gramm gr_inline_cards gr_run_anim Grammar multiReplace\\\" id=\\\"8\\\" data-gr-id=\\\"8\\\">has</g>&nbsp;been issued and booking has been confirmed</li><li>&nbsp;Offer is valid from&nbsp;07 February 2019 to&nbsp;1&nbsp;January 2020</li><li>Portal is not responsible for any issue related to 0% Taqseet offered by Samba to Samba credit cardholders.</li></ul>\",\"title\":\"Terms & Conditions\"}],\"text\":\"<p style=\\\"margin-right: 0px; margin-bottom: 10px; margin-left: 0px; color: rgb(53, 90, 105); font-family: &quot;Open Sans&quot;; font-size: 13px;\\\">Terms &amp; Conditions:&nbsp;</p><ul style=\\\"margin-bottom: 10px; color: rgb(53, 90, 105); font-family: &quot;Open Sans&quot;; font-size: 13px;\\\"><li>This offer is valid for Samba credit cardholders only</li><li>0% Taqseet applies on any bookings made through holidaysbysaudia.com or through our dedicated Call Centre&nbsp;</li><li>To convert the transaction to 0% Taqseet (installments with 0% markup and no fees), guest must contact SambaPhone two days after the tickets&nbsp;<g class=\\\"gr_ gr_8 gr-alert gr_gramm gr_inline_cards gr_run_anim Grammar multiReplace\\\" id=\\\"8\\\" data-gr-id=\\\"8\\\">has</g>&nbsp;been issued and booking has been confirmed</li><li>&nbsp;Offer is valid from&nbsp;07 February 2019 to&nbsp;1&nbsp;January 2020</li><li>Portal is not responsible for any issue related to 0% Taqseet offered by Samba to Samba credit cardholders.</li></ul>\",\"title\":\"Terms & Conditions\"}",
              "identifier": "termsandconditions"
            }
          ],
          "attributes": {
            "general": null,
            "style": null
          }
        }
      ],
      "attributes": {
        "general": null,
        "style": null
      }
    },
    {
      "id": "0dHcko7Hb6VYW2fu",
      "title": "New Row",
      "status": 1,
      "layout": "12",
      "cells": [
        {
          "id": "IAEHRJpNUzewt7j2",
          "status": 1,
          "rows": [],
          "components": [
            {
              "id": "jvk4HPrSBaotvUmj",
              "category": 1,
              "name": "trv-footer",
              "thumbnail": "assets/img/builder-components/image.svg",
              "title": "Footer",
              "description": "",
              "attributes": "",
              "identifier": null
            }
          ],
          "attributes": {
            "general": null,
            "style": null
          }
        }
      ],
      "attributes": {
        "general": null,
        "style": null
      }
    }
  ],
  "created_at": "2019-10-07T18:03:30.92+00:00",
  "updated_at": null,
  "created_by": null,
  "modified_by": null,
  "deleted_at": null
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPage>
) {
  res.status(200).json(page)
}
