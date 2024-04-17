import Image from "next/image";
import { ReactNode } from "react";


function ProfileImage() {
  return <div className="absolute">
    <div className="h-[250px] w-[250px] bg-red-950 translate-y-[-20px] translate-x-[-20px]"></div>
    <Image className="h-[250px] w-[250px]" alt="picture of Rickard Sandgren" src={"/profile.png"} fill />
  </div>
}

function Title({ children }: { children: ReactNode | string }) {
  return <div className="text-2xl mb-6">
    <span>{children}</span>
    <span className=" text-[#EE0000]"> &gt;&gt;</span>
  </div>;
}

function Header({ name = "", occupation = "" }) {
  return <>
    <div className="text-5xl">{name}</div>
    <div className="text-2xl text-[#EE0000] bold">{occupation}</div>
  </>
}

function Content({ children }: { children: ReactNode | string }) {
  return <div className="text-l mb-6">
    <span>{children}</span>
  </div>;
}


export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <div className="z-10 w-full min-h-[1000px] max-w-5xl font-mono text-sm lg:flex bg-white border-[#EE0000] border-2">
        <div className="grid grid-cols-9 gap-20 w-full m-14">
          <div className="col-start-0 col-span-3 relative min-h-[200px] mb-10">
            <ProfileImage />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <Header name="Rickard Sandgren" occupation="Full Stack Developer" />
          </div>

          <aside className="col-span-3">
            <Title >about</Title>
            <Content>
              Great coder with many special skills. Hire me and enjoy!
            </Content>
            <br></br>

            <Title >tech stack</Title>
            <Content>
              <div className="text-gray-500">
                Agile Methodologies/Scrum, JIRA, Javascript/Typescript, Redux, NextJS, React.js, Angular,
                Node.js/Express, Android/embedded, Modern Web tech, Tailwind, MySQL,
                MongoDB, PostgreSQL, WordPress, Git, Linux/Ubuntu, Bootstrap, AJAX,
                jQuery, Github, C/C++, Java, C#
              </div>
            </Content>
            <br></br>

            <Title >contact</Title>
            <Content>
              <div>Rickard Sandgren</div>
              <a href="rickxxxxxndgren@gmail.com" className="block italic">ricxxxxxgren@gmail.com</a>
              +46 xxxxxxxxxx
            </Content>
          </aside>
          <aside className="col-span-6">
            <Title >experience</Title>
            <Content><>


              <span className="text-blue-500 pr-4">Front end developer</span>
              <span className="text-red-500">(Cybercom 2013-2020)</span>
              <div>Tasks related to front end development in a wide range of projects. Did projects for Ikea, Sony, Eriksson, Tetrapak and more.</div>
              <br />
              <span className="text-blue-500 pr-4">More great work</span>
              <span className="text-red-500">(At home 2020-2024)</span>
              <div>During this time I did a lot of general great and appreciated work in various fields. It truly was a blast.</div>
              <br />
              <span className="text-blue-500 pr-4">More work</span>
              <span className="text-red-500">(A grear company 20xx-20xx)</span>
              <div>Important and interesting stuff was accomplished here.</div>
              <div>It was great and the poeple were inspiring.</div>

              <br />
              <span className="text-blue-500 pr-4">More work</span>
              <span className="text-red-500">(A grear company 20xx-20xx)</span>
              <div>Important and interesting stuff was accomplished here.</div>
              <div>It was great and the poeple were inspiring.</div>

              <br />
              <span className="text-blue-500 pr-4">More work</span>
              <span className="text-red-500">(A grear company 20xx-20xx)</span>
              <div>Important and interesting stuff was accomplished here.</div>
              <div>It was great and the poeple were inspiring.</div>

              <br />
              <div></div>
            </>
            </Content>
          </aside>

          <aside className="col-span-3">
            <Title >skills</Title>
            <Content>
              Great coder with many special skills. Hire me and enjoy!
            </Content>
          </aside>
          <aside className="col-span-6">
            <Title >education</Title>
            <Content>
              <span className="text-blue-500 pr-4">Lexicon - Developer in C#</span>
              <span className="text-red-500">(2024)</span>
              <br />              <br />
              <span className="text-blue-500 pr-4">Udemy - various front and back-end related courses</span>
              <span className="text-red-500">(2020-2023)</span>
              <br />              <br />
              <span className="text-blue-500 pr-4">Digitala Spel - game design and development</span>
              <span className="text-red-500">(2005-2009)</span>
            </Content></aside>

        </div>
      </div>
    </main >
  );
}
