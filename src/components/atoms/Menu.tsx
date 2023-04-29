import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface ISubMenu {
  name: string;
  subMenu?: ISubMenu[];
}

interface IProps {
  name: string;
  subMenu: ISubMenu[];
  shouldShowIcon?: boolean;
}

const Menu = (props: IProps) => {
  const { name, subMenu, shouldShowIcon } = props;
  return (
    <div className="custom-menu">
      <div className="group inline-block relative z-50">
        <button className="outline-none focus:outline-none px-3 py-1 bg-none rounded-sm flex items-center min-w-32">
          <span className="pr-1 flex-1 text-white">{name}</span>
          {shouldShowIcon && (
            <span>
              <MdOutlineKeyboardArrowDown
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-300 ease-in-out"
              />
            </span>
          )}
        </button>
        <ul
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition durarion-300 ease-in-out origin-top min-w-32"
        >
          {subMenu.map((item, index) => (
            <li
              className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
              key={index}
            >
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{item.name}</span>
                {item.subMenu && (
                  <span className="mr-auto">
                    <MdOutlineKeyboardArrowDown
                      className="fill-current h-4 w-4
            transition duration-300 ease-in-out"
                    />
                  </span>
                )}
              </button>
              <ul
                className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-300 ease-in-out origin-top-left
  min-w-32
  "
              >
                {item.subMenu &&
                  item.subMenu.map((item, index) => {
                    return (
                      <li
                        className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                        key={index}
                      >
                        <button className="w-full text-left flex items-center outline-none focus:outline-none">
                          <span className="pr-1 flex-1">{item.name}</span>
                          {item.subMenu && (
                            <span className="mr-auto">
                              <MdOutlineKeyboardArrowDown
                                className="fill-current h-4 w-4
                transition duration-300 ease-in-out"
                              />
                            </span>
                          )}
                        </button>
                        <ul
                          className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-300 ease-in-out origin-top-left
      min-w-32
      "
                        >
                          {item.subMenu &&
                            item.subMenu.map((item, index) => {
                              return (
                                <li
                                  className="px-3 py-1 hover:bg-gray-100"
                                  key={index}
                                >
                                  3+
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
