const BigScreenView = ({ navigation }) => {
  return (
    <div className="flex space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-primary font-bold hover:bg-primary hover:text-white rounded-md px-3 py-2 text-sm"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default BigScreenView;
