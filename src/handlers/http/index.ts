import { APIGatewayProxyHandler } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

import { getCraftAndCrew } from '@rx-example/implementations';
// 1. get people
// 2. start getting starships asap
// 3. create some other service that cannot be called until we have results from 2
//  a. fillPassengersToCapacity
//

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const craftAndCrew = await getCraftAndCrew(1);

  return {
    statusCode: StatusCodes.OK,
    body: JSON.stringify(craftAndCrew),
  };
};
