import { Base64 } from 'js-base64';
import { TextEncoder } from './encoder';
import { AwsV4Signer } from './aws4';

export const getBearerToken = (clusterId, credentials) => {
  const signer = new AwsV4Signer({
    url: 'https://sts.amazonaws.com/?Action=GetCallerIdentity&Version=2011-06-15&X-Amz-Expires=60',
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    method: 'GET',
    headers: {
      'x-k8s-aws-id': clusterId,
    },
    signQuery: true,
    service: 'sts',
  });
  const query = signer.sign();
  const b64Url = Base64.encodeURI(query.url);
  const token = `k8s-aws-v1.${b64Url}`;
  return token;
}
