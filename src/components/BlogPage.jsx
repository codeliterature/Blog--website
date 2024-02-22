import React, { useContext, useEffect } from "react";
import StateContext from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUser,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const { getBlog, article } = useContext(StateContext);

  useEffect(() => {
   getBlog(id);
  }, []);

  let arr = [];
  let formattedDate = "";
  if (article) {
    arr = article.tag.split(", ");
    const timestamp = article.date;
    const parsedDate = new Date(timestamp);

    const month = parsedDate.toLocaleString("default", { month: "short" });
    const day = parsedDate.getDate().toString().padStart(2, "0");

    formattedDate = `${month}-${day}`;
    function titleCase(str) {
      str = str.toLowerCase().split(" ");
      for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(" ");
    }
  }

  return (
    <div className="min-h-[90vh] my-4">
      {article && (
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center p-2 border-y border-black">
            <p>
              <FontAwesomeIcon icon={faUser} className="px-1" />
              {article.author}
            </p>
            <div>
              <FontAwesomeIcon icon={faEye} /> {article.views}
            </div>
          </div>
          <div className="">
            <h1 className="text-center  text-2xl font-bold py-2 ">
              {article.title}
            </h1>
            <div className="p-2 overflow-y-scroll h-[80%]">{article.description}</div>
            <div className='flex flex-col my-4 border-y border-black'>
              <div className="flex flex-wrap space-x-2 px-2 ">
                {arr.map((tag, index) => {
                  return (
                    <p key={index} className="">
                      #<i>{tag}</i>
                    </p>
                  );
                })}
              </div>
                <p className="py-1">
                  <FontAwesomeIcon icon={faCalendarDays} className="px-1 text-right" />
                  {formattedDate}
                </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
