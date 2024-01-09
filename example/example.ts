import Cache from '../';

const cache = new Cache();

function main() {
  cache.insertOne(
    'foo',
    {
      name: 'bar'
    },
    1000
  );

  const foo = cache.findOne('foo');

  console.log(foo);
}
main();
