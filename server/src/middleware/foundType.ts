import { Type } from '../associations/modelAssociations.js';
import { catchErrors } from '../errors/asyncCatch.js';

export const foundType = catchErrors(async (req, _res, next) => {
  const query = req.query;

//   let foundType = await Type.findOne({ where: { name: query.name } });
//   req.foundType = foundType;
//   console.log(foundType);
  next();
  //   if (query) {
  //     console.log(query);
  //   } else _next(' -> next we go to controller');
});
