import buku1 from '../assets/buku1.png';
import buku2 from '../assets/buku2.png';
import buku3 from '../assets/buku3.png';

const CategoryWrapper = () => {
  return (
    <div class="container mx-auto px-12 md:flex justify-center gap-5 mt-8">
      <img class="pt-10" src={buku1} alt="" />
      <img class="pt-10" src={buku2} alt="" />
      <img class="pt-10" src={buku3} alt="" />
    </div>
  );
};

export default CategoryWrapper;
