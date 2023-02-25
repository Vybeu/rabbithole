import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebase-config";
import { UserAuth } from "../config/contexts/AuthContext";


function Home() {

  const [postLists, setPostLists] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const {user} = UserAuth();
  
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);


  return (
    <div className="items-center">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Your <span className="text-blue-400">Rabbit</span> Hole
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {postLists.map((post) => (
              <article className="border-solid rounded border-2 flex max-w-xl flex-col px-3 py-3 items-start justify-between mr-5">
                <div className="flex items-center gap-x-4 text-xs">
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </a>
                  </h3>
                  <p
                    id="postTextContainer"
                    className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3 overflow-hidden break-words h-auto max-h-32 overflow-y-scroll sticky"
                  >
                    {post.postText}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.photo}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>@
                        {post.author.name}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="deletePost">
                {user && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
