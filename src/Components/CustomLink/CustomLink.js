import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: "none", borderBottom:match?"2px solid rgb(169, 14, 14)":'2px solid grey',
          color: match? 'rgb(169, 14, 14)':'black', fontWeight:'bold' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      
      </div>
    );
  }

  export default CustomLink;