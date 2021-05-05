const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Contact {
        id: ID
        name: String
        email: String
        msg: String
    }

    type Text {
        id: ID
        info: String
    }

    type Query {
        texts: [Text]
        Msg: [Contact]
    }

    type Mutation {
        addMsg(name: String, email: String, msg: String) : Contact
    }
`;

const texts = [
    {
        id:'1',
        info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id:'2',
        info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

let id=1
const contacts = []

const resolvers = {
    Query: {
        texts: ()=>texts,
        Msg: ()=>contacts
    },
    Mutation: {
        addMsg(parent, args, context, info) {
            let item = {
                id: id.toString(),
                name: args.name,
                email: args.email,
                msg: args.msg
            }
            id = id+1;
            contacts.push(item);
            return item;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});