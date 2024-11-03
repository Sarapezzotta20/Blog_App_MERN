import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

// export default function Post({
//   _id,
//   title,
//   summary,
//   cover,
//   content,
//   createdAt,
//   author,
// })
export default function Post({ post }) {
  const { _id, title, summary, cover, content, createdAt, author } = post;

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="/" className="author">
            {/* {author.username} */}
            {author ? author.username : "Author unknown"}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
          {/* <time>{formattedDate}</time> */}
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
