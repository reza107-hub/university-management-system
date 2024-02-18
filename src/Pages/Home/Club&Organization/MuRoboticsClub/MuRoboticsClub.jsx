import { CiHashtag } from 'react-icons/ci'
import AboutRouteFirstHalfContent from '../../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent'

const MuRoboticsClub = () => {
  return (
    <div>
      <AboutRouteFirstHalfContent
        title="Club & Organization"
        text="🤖Mu Robotics Club"
      />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md space-y-6">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white  flex items-center gap-2 font-bold p-2">
            <span className="text-xl">
              <CiHashtag />
            </span>
            Mu Robotics Club
          </p>
        </div>

        <p>
          <span className="font-bold">Nawshad Ahmed Chowdhury</span>, Advisor{' '}
          <br />
          Assistant Professor, Head, Dept. of EEE
        </p>
        <p>
          <span className="font-bold">Anwarul Kawchar</span>, President <br />
          Lecturer, Dept. of EEE
        </p>
        <p>
          <span className="font-bold">Mussammath Jubida Khanam</span>, Vice
          President <br />
          183-141-001, Dept. of EEE
        </p>

        <p>
          {' '}
          <span className="font-bold">Md. Haidar Ontor</span> , General
          Secretary <br />
          201-141-009, Dept. of EEE
        </p>

        <p>
          <span className="font-bold">Rudraneel Dutta</span> , Treasurer <br />
          201-141-007, Dept. of EEE
        </p>

        <p>
          <span className="font-bold">Abir Rahman</span> , Organizing Secretary{' '}
          <br />
          201-141-010, Dept. of EEE
        </p>
        <p>
          <span className="font-bold">Sifat Ikbal</span> , Publication Secretary{' '}
          <br />
          201-141-001, Dept. of EEE
        </p>

        <p>
          <span className="font-bold"> Abdullah Al Hadi Mahfuz</span> , Joint
          Organizing Secretary <br />
          201-115-075, Dept. of CSE
        </p>

        <p>
          <span className="font-bold">Bijoy Biswas</span> , Joint Organizing
          Secretary <br />
          201-151-078, Dept. of CSE
        </p>
        <p>
          <span className="font-bold">Md. Hasibul Islam</span> , Communication
          Secretary <br />
          Dept. of CSE
        </p>

        <p>
          <span className="font-bold">Shrishan Sen Noyon</span> , Executive
          Member <br />
          201-141-001, Dept. of EEE
        </p>

        <p>
          <span className="font-bold"> Salman Khan</span> , Executive Member{' '}
          <br />
          211-141-013, Dept. of EEE
        </p>

        <p>
          <span className="font-bold"> Humayra Khan Faiza</span> , Executive
          Member <br />
          201-151-080, Dept. of CSE
        </p>

        <p>
          <span className="font-bold">Nazifa Tasnim Chowdhury</span> , Executive
          Member <br />
          201-115-060, Dept. of CSE
        </p>

        <p>
          <span className="font-bold"> Akash Roy</span> , Executive Member{' '}
          <br />
          Dept. of English
        </p>

        <p>
          <span className="font-bold">Khulud Binte Harun</span> , Executive
          Member <br />
          211-115-013, Dept. of CSE
        </p>

        <p>
          <span className="font-bold"> Tanvir Mahmud Ove</span> , Executive
          Member <br />
          221-134-023, Dept. of SE
        </p>
      </div>
    </div>
  )
}

export default MuRoboticsClub
