const SmallScreenView = ({ navigation, Disclosure }) => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className="text-primary hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-bold"
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};

export default SmallScreenView;
