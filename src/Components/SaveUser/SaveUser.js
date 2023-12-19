const SaveUser = (data) => {
    const date = new Date()
    const saveUser = {
        email: data.email,
        role: "user",
        hasAdditionalInfo: false,
        isDeleted: false,
        createdAt: date,
        updatedAt: date
    };
    return saveUser
};

export default SaveUser;