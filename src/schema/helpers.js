import { gql } from 'apollo-server-express';

// eslint-disable-next-line import/prefer-default-export
export function groupGqls(gqls) {
  return gql`
    ${gqls.map(d => d.loc.source.body).join('\n')}
  `;
}

export function returnOnError(operation, alternative) {
  try {
    return operation();
  } catch (e) {
    return alternative;
  }
}
