import Star from './Star';
import type { Count } from './stars';

function Stars({ count }: Count) {

  let list;
  const Item: Item = Star;
  if (typeof(count) !== 'number') {
    list = []
  } else if (0 < count && count <= 5) {
    list = Array(count).fill('');
  } else {
    list = [];
  }

  return (
      <ul className='card-body-stars u-clearfix'>
        {list.map((_, index) => <Item key={index}/>)}
      </ul>
  )
}

export default Stars

type Item = () => JSX.Element;
