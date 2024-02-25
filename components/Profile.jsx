import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
        <h1 className='head_text text-left'>
            <span className='orange_gradient'>Min Profil</span>
        </h1>
        <p className='desc text-left'>
            Välommen till din profilsida. Här finner du de prompts
            du själv skapat. Här inne kan du också redigera eller ta
            bort dina egna skapade prompts.
        </p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
