import { DynamoDBStore } from './store';


/**
 * Return the `DynamoDBStore` extending `connect`'s session Store.
 *
 * @param {object} connect
 * @return {Function}
 * @api public
 */

export default function connect(store: any) {

  return DynamoDBStore
}