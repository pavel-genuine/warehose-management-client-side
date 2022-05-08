import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: "none", borderBottom:match?"2px solid orange":'2px solid grey',
          color: match? 'orange':'black', fontWeight:'bold' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      
      </div>
    );
  }

  export default CustomLink;