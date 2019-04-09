import { graphql } from 'graphql';
import Server from '../../server';
import schema from '..';
import { closeMongo, dropMongo } from '../../__tests__/helpers/mongoose';

describe('movie mutations', () => {
  beforeAll(async () => Server.database());

  afterAll(() => closeMongo());

  beforeEach(async () => {
    await dropMongo();
  });

  test('addMovie', async () => {
    const movieData = {
      title: 'O Pagador de Promessas',
      price: 25.0,
      stars: ['Leonardo Villar', 'Glória Menezes'],
    };
    const query = `mutation addMovie($input: AddMovieInput!){
      addMovie(input: $input) {
        movie {
          title
          price
          stars
          status
        }
      }
    }`;
    const response = await graphql(
      schema,
      query,
      null,
      {},
      { input: movieData },
    );
    expect(response).toMatchObject({
      data: {
        addMovie: {
          movie: {
            title: 'O Pagador de Promessas',
            price: 25.0,
            stars: ['Leonardo Villar', 'Glória Menezes'],
            status: 'AVAILABLE',
          },
        },
      },
    });
  });
});
