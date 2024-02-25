import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center green_gradient'>
      KreativaTankar
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Här hittar du olika <br />slags prompts</span>
    </h1>
    <p className='desc text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis harum, debitis unde quisquam esse error dolor illum
        et aperiam dolorum repudiandae excepturi odio libero cumque
        corporis, tempora perspiciatis dolores earum.
    </p>

    <Feed />
  </section>
);

export default Home;
