const Mutation = {
    createName: (parent, {name}, ctx, info) => {
        return name;
    }
};

export default Mutation;