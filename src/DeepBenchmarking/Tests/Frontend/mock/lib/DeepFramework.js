DeepFramework.Kernel.load({
  "appIdentifier":"deep.api.test.app_1",
  "env":"test",
  "awsAccountId":389617777922,
  "aws":{
    "accessKeyId”:”ewrwerwerewrwJJJJdqd”,”secretAccessKey”:”asdasdasdadasdadadad”,”region":"us-west-2"
  },
  "awsRegion":"us-west-2",
  "deployId":"3421a10437efde138e3c77ea780f6ad8",
  "globals":{
    "userProviderEndpoint":"@deep.auth:user-retrieve",
    "security":{
      "identityProviders":{
        "www.amazon.com":"amzn1.application.3b5k2jb53252352kjh5b23kj5hb"
      }
    }
  },
  "microservices":{
    "deep.benchmarking":{
      "identifier":"deep.benchmarking",
      "localPath":"/var/folders/td/l6f2jrdj25x9dw6nxx3_4khc0000gn/T/hello_api_1444009917471/DeepBenchmarking",
      "resources":{
        "sample":{
          "say-hello":{
            "identifier":"sample-say-hello",
            "resourceName":"sample",
            "name":"say-hello",
            "description":"Says hello to the world",
            "type":"lambda",
            "source":"src/SayHello",
            "methods":[
              "POST"
            ],
            "engine":{
              "memory":128,
              "timeout":60,
              "runtime":"nodejs"
            }
          },
          "say-bye":{
            "identifier":"sample-say-bye",
            "resourceName":"sample",
            "name":"say-bye",
            "description":"Says bye to the world",
            "type":"external",
            "source":"http://petstore.swagger.io/v2/store/inventory",
            "methods":[
              "GET"
            ],
            "engine":{
              "memory":128,
              "timeout":60,
              "runtime":"nodejs"
            }
          }
        }
      },
      "parameters":{
        "globals":{
          "userProviderEndpoint":"@deep.auth:user-retrieve",
          "security":{
            "identityProviders":{
              "www.amazon.com":"amzn1.application.3b5k2jb53252352kjh5b23kj5hb"
            }
          }
        },
        "frontend":{

        },
        "backend":{

        }
      },
      "raw":{
        "name":"DeepBenchmarking",
        "propertyRoot":true,
        "identifier":"deep.benchmarking",
        "description":"Example microservice that does hello world",
        "version":"0.0.1",
        "author":{
          "name":"Mitoc Group",
          "email":"hello@mitocgroup.com",
          "website":"https://www.deep.mg"
        },
        "contributors":[
          {
            "name":"AlexanderC",
            "email":"alexanderc@mitocgroup.com"
          },
          {
            "name":"MarcelGoria",
            "email":"mgoria@mitocgroup.com"
          },
          {
            "name":"VeaceslavCotruta",
            "email":"vcotruta@mitocgroup.com"
          }
        ],
        "dependencies":{

        },
        "autoload":{
          "frontend":"Frontend",
          "backend":"Backend",
          "docs":"Docs",
          "models":"Models"
        },
        "frontendEngine":[
          "angular"
        ],
        "tags":[

        ],
        "lambdas":{
          "_":{
            "sample-say-hello":{
              "memory":128,
              "timeout":60,
              "runtime":"nodejs"
            }
          },
          "sample-say-hello":"/var/folders/td/l6f2jrdj25x9dw6nxx3_4khc0000gn/T/hello_api_1444009917471/DeepBenchmarking/Backend/src/SayHello"
        }
      },
      "isRoot":true,
      "autoload":{
        "frontend":"/var/folders/td/l6f2jrdj25x9dw6nxx3_4khc0000gn/T/hello_api_1444009917471/DeepBenchmarking/Frontend",
        "backend":"/var/folders/td/l6f2jrdj25x9dw6nxx3_4khc0000gn/T/hello_api_1444009917471/DeepBenchmarking/Backend",
        "docs":"/var/folders/td/l6f2jrdj25x9dw6nxx3_4khc0000gn/T/hello_api_1444009917471/DeepBenchmarking/Docs",
        "models":"/var/folders/td/l6f2jrdj25x9dw6nxx3_4khc0000gn/T/hello_api_1444009917471/DeepBenchmarking/Models"
      },
      "lambdas":{
        "sample-say-hello":{
          "name":"DeepTestSampleSayHelloba335502",
          "region":"us-west-2",
          "arn":"arn:aws:lambda:us-west-2:389617777922:function:DeepTestSampleSayHelloba335502"
        }
      },
      "deployedServices":{
        "lambdas":{
          "sample-say-hello":{
            "CodeSize":4479,
            "Description":"",
            "FunctionArn":"arn:aws:lambda:us-west-2:389617777922:function:DeepTestSampleSayHelloba335502",
            "FunctionName":"DeepTestSampleSayHelloba335502",
            "Handler":"bootstrap.handler",
            "LastModified":"2015-10-05T01:52:07.063+0000",
            "MemorySize":128,
            "Role":"arn:aws:iam::389617777922:role/DeepTestSampleSayHelloExecba335502",
            "Runtime":"nodejs",
            "Timeout":60
          }
        }
      }
    }
  },
  "models":[
    {
      "Name":{
        "Name":"string",
        "Id":"timeUUID"
      }
    }
  ],
  "provisioning":{
    "elasticache":{

    },
    "kinesis":{

    },
    "sns":{

    },
    "iam":{

    },
    "cloudfront":{
      "id":"E3O9SD1DB25M03",
      "domain":"dqhmvrf1ppxzd.cloudfront.net"
    },
    "cognito-identity":{
      "identityPool":{
        "AllowUnauthenticatedIdentities":true,
        "DeveloperProviderName":"deep.mg",
        "IdentityPoolId":"us-east-1:649d2636-be0b-4cf2-b294-15170518e1ba",
        "IdentityPoolName":"DeepTestIdentityPoolf58609f5",
        "SupportedLoginProviders":{
          "www.amazon.com":"amzn1.application.3b5k2jb53252352kjh5b23kj5hb"
        }
      },
      "roles":{
        "unauthenticated":{
          "Path":"/",
          "RoleName":"DeepTestUnauthenticatedf58609f5",
          "RoleId":"AROAIFVZ3EBMVIZ4ESHWW",
          "Arn":"arn:aws:iam::389617777922:role/DeepTestUnauthenticatedf58609f5",
          "CreateDate":"2015-10-05T01:52:05.471Z",
          "AssumeRolePolicyDocument":"%7B%22Version%22%3A%222012-10-17%22%2C%22Statement%22%3A%5B%7B%22Effect%22%3A%22Allow%22%2C%22Action%22%3A%5B%22sts%3AAssumeRoleWithWebIdentity%22%5D%2C%22Condition%22%3A%7B%22StringEquals%22%3A%7B%22cognito-identity.amazonaws.com%3Aaud%22%3A%22us-east-1%3A649d2636-be0b-4cf2-b294-15170518e1ba%22%7D%2C%22ForAnyValue%3AStringLike%22%3A%7B%22cognito-identity.amazonaws.com%3Aamr%22%3A%22unauthenticated%22%7D%7D%2C%22Principal%22%3A%7B%22Federated%22%3A%22cognito-identity.amazonaws.com%22%7D%7D%5D%7D"
        },
        "authenticated":{
          "Path":"/",
          "RoleName":"DeepTestAuthenticatedf58609f5",
          "RoleId":"AROAJ7BNEF6QXDIOSRH3K",
          "Arn":"arn:aws:iam::389617777922:role/DeepTestAuthenticatedf58609f5",
          "CreateDate":"2015-10-05T01:52:05.471Z",
          "AssumeRolePolicyDocument":"%7B%22Version%22%3A%222012-10-17%22%2C%22Statement%22%3A%5B%7B%22Effect%22%3A%22Allow%22%2C%22Action%22%3A%5B%22sts%3AAssumeRoleWithWebIdentity%22%5D%2C%22Condition%22%3A%7B%22StringEquals%22%3A%7B%22cognito-identity.amazonaws.com%3Aaud%22%3A%22us-east-1%3A649d2636-be0b-4cf2-b294-15170518e1ba%22%7D%2C%22ForAnyValue%3AStringLike%22%3A%7B%22cognito-identity.amazonaws.com%3Aamr%22%3A%22authenticated%22%7D%7D%2C%22Principal%22%3A%7B%22Federated%22%3A%22cognito-identity.amazonaws.com%22%7D%7D%5D%7D"
        }
      },
      "postDeploy":{
        "inlinePolicies":{
          "DeepTestUnauthenticatedf58609f5":{
            "_version":"2012-10-17",
            "_statement":{
              "_vector":[
                {
                  "_effect":"Allow",
                  "_action":{
                    "_vector":[
                      {
                        "_service":"lambda",
                        "_action":"InvokeFunction"
                      }
                    ]
                  },
                  "_notAction":{
                    "_vector":[

                    ]
                  },
                  "_resource":{
                    "_vector":[
                      {
                        "_service":"lambda",
                        "_region":"us-west-2",
                        "_accountId":"389617777922",
                        "_descriptor":"function:DeepTestSampleSayHelloba335502"
                      }
                    ]
                  },
                  "_notResource":{
                    "_vector":[

                    ]
                  },
                  "_condition":null,
                  "_principal":null
                }
              ]
            }
          },
          "DeepTestAuthenticatedf58609f5":{
            "_version":"2012-10-17",
            "_statement":{
              "_vector":[
                {
                  "_effect":"Allow",
                  "_action":{
                    "_vector":[
                      {
                        "_service":"lambda",
                        "_action":"InvokeFunction"
                      }
                    ]
                  },
                  "_notAction":{
                    "_vector":[

                    ]
                  },
                  "_resource":{
                    "_vector":[
                      {
                        "_service":"lambda",
                        "_region":"us-west-2",
                        "_accountId":"389617777922",
                        "_descriptor":"function:DeepTestSampleSayHelloba335502"
                      }
                    ]
                  },
                  "_notResource":{
                    "_vector":[

                    ]
                  },
                  "_condition":null,
                  "_principal":null
                }
              ]
            }
          }
        }
      }
    },
    "lambda":{
      "names":{
        "deep.benchmarking":{
          "sample-say-hello":"DeepTestSampleSayHelloba335502"
        }
      },
      "executionRoles":{
        "deep.benchmarking":{
          "sample-say-hello":{
            "Path":"/",
            "RoleName":"DeepTestSampleSayHelloExecba335502",
            "RoleId":"AROAJBNK6ZVLBDXSQJUQ6",
            "Arn":"arn:aws:iam::389617777922:role/DeepTestSampleSayHelloExecba335502",
            "CreateDate":"2015-10-05T01:52:00.328Z",
            "AssumeRolePolicyDocument":"%7B%22Version%22%3A%222012-10-17%22%2C%22Statement%22%3A%5B%7B%22Effect%22%3A%22Allow%22%2C%22Action%22%3A%5B%22sts%3AAssumeRole%22%5D%2C%22Principal%22%3A%7B%22Service%22%3A%22lambda.amazonaws.com%22%7D%7D%5D%7D"
          }
        }
      },
      "executionRolesPolicies":{
        "DeepTestSampleSayHelloExecba335502":{
          "_version":"2012-10-17",
          "_statement":{
            "_vector":[
              {
                "_effect":"Allow",
                "_action":{
                  "_vector":[
                    {
                      "_service":"logs",
                      "_action":"*"
                    }
                  ]
                },
                "_notAction":{
                  "_vector":[

                  ]
                },
                "_resource":{
                  "_vector":[
                    {
                      "_service":"logs",
                      "_region":"*",
                      "_accountId":"*",
                      "_descriptor":"*"
                    }
                  ]
                },
                "_notResource":{
                  "_vector":[

                  ]
                },
                "_condition":null,
                "_principal":null
              },
              {
                "_effect":"Allow",
                "_action":{
                  "_vector":[
                    {
                      "_service":"dynamodb",
                      "_action":"*"
                    }
                  ]
                },
                "_notAction":{
                  "_vector":[

                  ]
                },
                "_resource":{
                  "_vector":[
                    {
                      "_service":"dynamodb",
                      "_region":"*",
                      "_accountId":"*",
                      "_descriptor":"table/DeepTestNamef58609f5"
                    }
                  ]
                },
                "_notResource":{
                  "_vector":[

                  ]
                },
                "_condition":null,
                "_principal":null
              },
              {
                "_effect":"Allow",
                "_action":{
                  "_vector":[
                    {
                      "_service":"s3",
                      "_action":"*"
                    }
                  ]
                },
                "_notAction":{
                  "_vector":[

                  ]
                },
                "_resource":{
                  "_vector":[
                    {
                      "_service":"s3",
                      "_region":"",
                      "_accountId":"",
                      "_descriptor":"deep.test.public.f58609f5/deep.benchmarking/*"
                    },
                    {
                      "_service":"s3",
                      "_region":"",
                      "_accountId":"",
                      "_descriptor":"deep.test.temp.f58609f5/deep.benchmarking/*"
                    },
                    {
                      "_service":"s3",
                      "_region":"",
                      "_accountId":"",
                      "_descriptor":"deep.test.system.f58609f5/deep.benchmarking/*"
                    }
                  ]
                },
                "_notResource":{
                  "_vector":[

                  ]
                },
                "_condition":null,
                "_principal":null
              }
            ]
          }
        }
      }
    },
    "s3":{
      "buckets":{
        "public":{
          "name":"deep.test.public.f58609f5"
        },
        "temp":{
          "name":"deep.test.temp.f58609f5"
        },
        "system":{
          "name":"deep.test.system.f58609f5"
        }
      }
    },
    "apigateway":{
      "api":{
        "id":"tgsbgbqnx8",
        "name":"DeepTestApif58609f5",
        "baseUrl":"https://tgsbgbqnx8.execute-api.us-west-2.amazonaws.com/test",
        "resources":{
          "/":{
            "id":"4zmov7nb3l",
            "parentId":null,
            "path":"/",
            "pathPart":null
          },
          "/hello-world-example":{
            "id":"d2kqva",
            "parentId":"4zmov7nb3l",
            "path":"/hello-world-example",
            "pathPart":"hello-world-example"
          },
          "/hello-world-example/sample":{
            "id":"pjuz61",
            "parentId":"d2kqva",
            "path":"/hello-world-example/sample",
            "pathPart":"sample"
          },
          "/hello-world-example/sample/say-hello":{
            "id":"e7e1ev",
            "parentId":"pjuz61",
            "path":"/hello-world-example/sample/say-hello",
            "pathPart":"say-hello"
          },
          "/hello-world-example/sample/say-bye":{
            "id":"1a1tpg",
            "parentId":"pjuz61",
            "path":"/hello-world-example/sample/say-bye",
            "pathPart":"say-bye"
          }
        },
        "role":{
          "Path":"/",
          "RoleName":"DeepTestApiInvokeLambdaf58609f5",
          "RoleId":"AROAJH4MOPCGPA7TD5LRU",
          "Arn":"arn:aws:iam::389617777922:role/DeepTestApiInvokeLambdaf58609f5",
          "CreateDate":"2015-10-05T01:52:02.686Z",
          "AssumeRolePolicyDocument":"%7B%22Version%22%3A%222012-10-17%22%2C%22Statement%22%3A%5B%7B%22Effect%22%3A%22Allow%22%2C%22Action%22%3A%5B%22sts%3AAssumeRole%22%5D%2C%22Principal%22%3A%7B%22Service%22%3A%22apigateway.amazonaws.com%22%7D%7D%5D%7D"
        }
      },
      "postDeploy":{
        "methods":{
          "/hello-world-example/sample/say-hello":{
            "POST":{
              "source":{
                "apiKeyRequired":false,
                "authorizationType":"AWS_IAM",
                "httpMethod":"POST",
                "integrationPut":{
                  "httpMethod":"POST",
                  "name":null,
                  "putIntegrationInput":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "methodDelete":{
                  "httpMethod":"POST",
                  "name":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "methodIntegration":null,
                "methodResponses":null,
                "methodUpdate":{
                  "httpMethod":"POST",
                  "name":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null,
                  "updateMethodInput":null
                },
                "methodresponsePut":{
                  "PutMethodResponseInput":null,
                  "httpMethod":"POST",
                  "name":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "statusCode":null,
                  "template":true,
                  "templateSkipList":null,
                  "title":null
                },
                "requestModels":{
                  "application/json":"Empty"
                },
                "requestParameters":{

                },
                "self":{
                  "__type":"GetMethodRequest:http://internal.amazon.com/coral/com.amazonaws.backplane.controlplane/",
                  "httpMethod":"POST",
                  "name":"POST",
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":"POST"
                }
              }
            }
          },
          "/hello-world-example/sample/say-bye":{
            "GET":{
              "source":{
                "apiKeyRequired":false,
                "authorizationType":"AWS_IAM",
                "httpMethod":"GET",
                "integrationPut":{
                  "httpMethod":"GET",
                  "name":null,
                  "putIntegrationInput":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "methodDelete":{
                  "httpMethod":"GET",
                  "name":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "methodIntegration":null,
                "methodResponses":null,
                "methodUpdate":{
                  "httpMethod":"GET",
                  "name":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null,
                  "updateMethodInput":null
                },
                "methodresponsePut":{
                  "PutMethodResponseInput":null,
                  "httpMethod":"GET",
                  "name":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "statusCode":null,
                  "template":true,
                  "templateSkipList":null,
                  "title":null
                },
                "requestModels":{
                  "application/json":"Empty"
                },
                "requestParameters":{

                },
                "self":{
                  "__type":"GetMethodRequest:http://internal.amazon.com/coral/com.amazonaws.backplane.controlplane/",
                  "httpMethod":"GET",
                  "name":"GET",
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":"GET"
                }
              }
            }
          }
        },
        "integrations":{
          "/hello-world-example/sample/say-hello":{
            "POST":{
              "source":{
                "cacheKeyParameters":null,
                "cacheNamespace":"e7e1ev",
                "credentials":"arn:aws:iam::*:user/*",
                "httpMethod":"POST",
                "integrationDelete":{
                  "httpMethod":"POST",
                  "name":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "integrationResponses":null,
                "integrationUpdate":{
                  "httpMethod":"POST",
                  "name":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null,
                  "updateIntegrationInput":null
                },
                "integrationresponsePut":{
                  "httpMethod":"POST",
                  "name":null,
                  "putIntegrationResponseInput":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "statusCode":null,
                  "template":true,
                  "templateSkipList":null,
                  "title":null
                },
                "requestParameters":null,
                "requestTemplates":{
                  "application/json":null
                },
                "self":{
                  "__type":"GetIntegrationRequest:http://internal.amazon.com/coral/com.amazonaws.backplane.controlplane/",
                  "httpMethod":"POST",
                  "name":null,
                  "resourceId":"e7e1ev",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "type":"AWS",
                "uri":"arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:389617777922:function:DeepTestSampleSayHelloba335502/invocations"
              }
            }
          },
          "/hello-world-example/sample/say-bye":{
            "GET":{
              "source":{
                "cacheKeyParameters":null,
                "cacheNamespace":"1a1tpg",
                "credentials":"arn:aws:iam::*:user/*",
                "httpMethod":"GET",
                "integrationDelete":{
                  "httpMethod":"GET",
                  "name":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "integrationResponses":null,
                "integrationUpdate":{
                  "httpMethod":"GET",
                  "name":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null,
                  "updateIntegrationInput":null
                },
                "integrationresponsePut":{
                  "httpMethod":"GET",
                  "name":null,
                  "putIntegrationResponseInput":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "statusCode":null,
                  "template":true,
                  "templateSkipList":null,
                  "title":null
                },
                "requestParameters":null,
                "requestTemplates":{
                  "application/json":null
                },
                "self":{
                  "__type":"GetIntegrationRequest:http://internal.amazon.com/coral/com.amazonaws.backplane.controlplane/",
                  "httpMethod":"GET",
                  "name":null,
                  "resourceId":"1a1tpg",
                  "restApiId":"tgsbgbqnx8",
                  "template":false,
                  "templateSkipList":null,
                  "title":null
                },
                "type":"HTTP",
                "uri":"http://petstore.swagger.io/v2/store/inventory"
              }
            }
          }
        },
        "rolePolicy":{
          "_version":"2012-10-17",
          "_statement":{
            "_vector":[
              {
                "_effect":"Allow",
                "_action":{
                  "_vector":[
                    {
                      "_service":"lambda",
                      "_action":"InvokeFunction"
                    }
                  ]
                },
                "_notAction":{
                  "_vector":[

                  ]
                },
                "_resource":{
                  "_vector":[
                    {
                      "_service":"lambda",
                      "_region":"us-west-2",
                      "_accountId":"389617777922",
                      "_descriptor":"function:DeepTestSampleSayHelloba335502"
                    }
                  ]
                },
                "_notResource":{
                  "_vector":[

                  ]
                },
                "_condition":null,
                "_principal":null
              }
            ]
          }
        },
        "deployedApi":{
          "source":{
            "apiSummary":null,
            "createdDate":1444009933.601,
            "deploymentDelete":{
              "deploymentId":"nk565e",
              "name":null,
              "restApiId":"tgsbgbqnx8",
              "template":false,
              "templateSkipList":null,
              "title":null
            },
            "deploymentStages":{
              "deploymentId":"nk565e",
              "name":null,
              "restApiId":"tgsbgbqnx8",
              "template":false,
              "templateSkipList":[
                "position"
              ],
              "title":null
            },
            "deploymentUpdate":{
              "deploymentId":"nk565e",
              "name":null,
              "restApiId":"tgsbgbqnx8",
              "template":false,
              "templateSkipList":null,
              "title":null,
              "updateDeploymentInput":null
            },
            "description":"Deployed on 18:52:12 GMT-0700 (PDT)",
            "id":"nk565e",
            "self":{
              "__type":"GetDeploymentRequest:http://internal.amazon.com/coral/com.amazonaws.backplane.controlplane/",
              "deploymentId":"nk565e",
              "embed":null,
              "name":null,
              "restApiId":"tgsbgbqnx8",
              "template":false,
              "templateSkipList":null,
              "title":null
            }
          }
        }
      }
    },
    "dynamodb":{
      "tablesNames":{
        "Name":"DeepTestNamef58609f5"
      }
    }
  }
}, function(){});
