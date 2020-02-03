react-native-eks-auth
---------------------
A package for authenticating to AWS EKS clusters using IAM authentication from within a React Native environment without access to Node.js core modules.

Install
-------

```$ npm install --save react-native-eks-auth```

Syntax
------

### getBearerToken(clusterName, credentials)

This generates a bearer token which can then be used in the `Authorization` header of Kubernetes RESTful API requests to EKS clusters.

Example Usage
-------------

```javascript
import { getBearerToken } from 'react-native-eks-auth';
import RNFetchBlob from 'rn-fetch-blob';

const apiFetch = async () => {

  const credentials = {
    accessKeyId: '<your-access-key-id>',
    secretAccessKey: '<your-secret-access-key>',
  }

  const token = getBearerToken('<cluster name>', credentials);

  const authHeader = {
    Authorization: `Bearer ${token}`,
  };

  const res = await RNFetchBlob.config({
    trusty: true, /* prevents self-signed certificate rejection */
  })
    .fetch('GET', 'https://<endpoint>.eks.amazonaws.com/<api path>', authHeader);

  return res.json();
}
```

Your AWS credentials (which can be found in your
[AWS console](https://portal.aws.amazon.com/gp/aws/securityCredentials))
are specified as the second argument in an object:

```javascript
getBearerToken(clusterName, {
  accessKeyId: '<your-access-key-id>',
  secretAccessKey: '<your-secret-access-key>',
});
```

More Info
---------
[API Authorization from Outside a Cluster](https://github.com/kubernetes-sigs/aws-iam-authenticator#api-authorization-from-outside-a-cluster)
