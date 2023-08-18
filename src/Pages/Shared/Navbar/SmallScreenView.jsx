const SmallScreenView = ({ navigation, Disclosure }) => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};

export default SmallScreenView;
