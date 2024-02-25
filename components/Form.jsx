import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient'>Skapa prompt</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error ducimus maxime earum adipisci rem consectetur ratione possimus
        velit cupiditate ex voluptatibus expedita culpa amet maiores facere,
        recusandae incidunt? Harum, laborum?
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-200'>
            Din prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Skriv här...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-200'>
            Ge din prompt en tag{" "}
            <span className='font-normal'>
              (#idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-300 text-sm'>
            Avbryt
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `Skapar` : 'Skapa'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
