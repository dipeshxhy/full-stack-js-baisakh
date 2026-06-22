import WorkFeature from './WorkFeature';

const work = [
  {
    img: '/f1.jpg',
    title: 'Free Resume Assessments',
    desc: 'Employers on average spend 31 seconds scanning resumes to identify potential matches.',
  },
  {
    img: '/f2.jpg',
    title: 'Job Fit Scoring',
    desc: 'Our new fit meter shows you which jobs are most relevant to your skills and interests.',
  },
  {
    img: '/f3.png',
    title: 'Help Every Step of the Way',
    desc: 'Our career advice section is full of information to help you identify the right fit.',
  },
];
const WorkFeatures = () => {
  return (
    <div className="grid container mx-auto md:grid-cols-3 gap-4 my-10">
      {work.map((item, index) => (
        <WorkFeature
          key={index}
          img={item.img}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};
export default WorkFeatures;
