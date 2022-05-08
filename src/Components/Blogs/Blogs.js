import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h5> JavaScript Vs NodeJS : </h5>
            <p>
                জাভাস্ক্রিপ্ট ব্রাউজারে স্ক্রিপ্ট লেখার জন্য ব্যবহৃত একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ।
                NodeJS হলো জাভাস্ক্রিপ্টের একটি রানটাইম এনভায়রনমেন্ট।
            </p>

            <p>
                জাভাস্ক্রিপ্ট কেবলমাত্র ব্রাউজারেই রান হতে পারে।

                ব্রাউজারের বাইরে জাভাস্ক্রিপ্টকে রান করতে NodeJS কাজ করে।
            </p>

            <p>
                জাভাস্ক্রিপ্ট সাধারণত ক্লায়েন্ট সাইডে ব্যবহার হয়।
                আর NodeJs ব্যবহার হয় সার্ভার সাইডে।
            </p>

            <p>
                জাভাস্ক্রিপ্ট HTML এর সাথে ব্যবহার করা যেতে পারে এবং DOM এর সাথে ব্যবহার করা যেতে পারে।
                Nodejs HTML ট্যাগ যোগ করতে পারে না
            </p>

            <p>
                জাভাস্ক্রিপ্ট যেকোন ব্রাউজার ইঞ্জিনে চলতে পারে যেমন V8, সাফারিতে জেএস কোর এবং ফায়ারফক্সে স্পাইডারমনকি।
                V8 হল node.js এর ভিতরে জাভাস্ক্রিপ্ট ইঞ্জিন যা জাভাস্ক্রিপ্ট পার্স করে এবং চালায়।
            </p>

            <p>
                JavaScript,  ECMA স্ক্রিপ্টের updated version যা C++ এ লেখা Chrome এর V8 ইঞ্জিন ব্যবহার করে।
                নোডেজগুলি C, C++ এবং জাভাস্ক্রিপ্টে লেখা হয়।
            </p>

            <div>
                <h5> Sql vs nosql : </h5>
                <p>
                    Sql is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                    Nosql is Non-relational or distributed database system. <br />

                    sql databases have fixed or static or predefined schema, nosql  have dynamic schema

                    <br />

                    sql databases are not suited for hierarchical data storage.
                    nosql databases are best suited for hierarchical data storage.

                    <br />
                    sql databases are best suited for complex queries, nosql  databases are not so good for complex queries.

                    <br />
                    Sql Vertically Scalable , nosql Horizontally scalable

                </p>
            </div>

            <div>
                <h5>
                    purpose of JWT and how it works :
                </h5>

                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.
                When the authorization is granted, the authorization server returns an access token to the application.
                The application uses the access token to access a protected resource (like an API).

            </div>
<br /><br />
            <div>
                <h5>
                 When should use NodeJS and when should use MongoDB :
                </h5>

                <p>

                    
                   NodeJs : <br />
                    Real-time applications. As we have found that Node.js can ensure great speed and performance, one of the textbook Node.js use cases is real-time messaging, or chatting. The environment can support heavy traffic of multiple short messages, or chatrooms when messages are displayed to many users at the same time.
                    IoT applications. The synergy of Node.js IoT is the best possible for implementing IoT development projects.
                    First, Node js is fast and powerful, and therefore capable of handling large data flows. Second, you can easily integrate Node.js with IoT protocols (the integration with MQTT and WebSockets can be a good example).
                    And finally, the Node Package Manager briefly described above, has a significant number of helpful IoT modules that help implement the most ambitious IoT projects.
                    These are just a few reasons why some big brands, including Microsoft, are already using Node.js for their IOT development purposes.
                    Collaborative tools. This Node.js use case example is also related to its ability to process real-time flows. You should have heard of Trello, a project management application that is rather popular with software development companies. Well, Trello was developed on the basis of Node.js and benefited from its event-driven, non-blocking model. Node.js is great for applications requiring immediate updates, such as various collaboration tools and online documentation suites.
                    Data streaming applications. The term “streaming” means exactly that – sending large amounts of data in smaller packages instead of a single batch. This ability is especially critical for audio or video streaming applications. Node.js is perfectly suited for this task with built-in modules supporting data streaming and allowing to create both readable and writable data streams. If we add that Netflix, a global media service provider, uses Node.js, you may get the idea of how powerful this environment is.
                    Applications relying on scalability. The superb scalability supported by Node.js answers the “why Node.js” question for apps required to withstand high peak loads. This is the reason why Uber chose Node.js to develop its app. The global taxi network is always growing and expanding its presence; at the same time, the nature of the taxi business causes high demand peaks during holidays. Node.js handles these challenges quite well.
                   <br /> <br />
                    MongoDB : <br />
                    Since, MongoDB is a NoSQL database, so we need to understand when and why we need to use this type of database in the real-life applications. Since in normal circumstances, MongoDB always preferred by the developers or project managers when our main concern is the deal with large volume of data with a high performance. If we want to insert thousands of records in a second, then MongoDB is the best choice for that. Also, horizontal scaling (adding new columns) is not so easy process in any RDBMS systems. But in case of MongoDB, it is very much easy since it is a schema less database. Also, this type of work can be directly handled by the application automatically. There is no need to any type of administrative work for perform any type of horizontal scaling in the MongoDB.

                </p>
            </div>
        </div>


    );
};

export default Blogs;