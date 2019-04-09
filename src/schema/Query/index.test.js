import { graphql } from 'graphql';
import Server from '../../server';
import schema from '..';
import { closeMongo, dropMongo } from '../../__tests__/helpers/mongoose';
import Movie from '../../models/Movie';

describe('movie queries', () => {
  beforeAll(async () => Server.database());

  afterAll(() => closeMongo());

  beforeEach(async () => {
    await dropMongo();
  });

  test('query all movies on database', async () => {
    await Movie.insertMany([
      {
        title: 'O Auto da Compadecida',
        price: 10.1,
        stars: ['Selton Mello', 'Matheus Nachtergaele'],
      },
      {
        title: 'O Homem do Ano',
        price: 15.3,
        stars: ['Murilo Benício', 'Cláudia Abreu'],
      },
    ]);
    const query = `query {
      movies {
        title
        price
        stars
        status
      }
    }`;
    const response = await graphql(schema, query, null, {});
    expect(response).toMatchObject({
      data: {
        movies: [
          {
            title: 'O Auto da Compadecida',
            price: 10.1,
            stars: ['Selton Mello', 'Matheus Nachtergaele'],
            status: 'AVAILABLE',
          },
          {
            title: 'O Homem do Ano',
            price: 15.3,
            stars: ['Murilo Benício', 'Cláudia Abreu'],
            status: 'AVAILABLE',
          },
        ],
      },
    });
  });
});
