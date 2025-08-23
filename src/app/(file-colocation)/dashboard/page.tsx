import LineChart from "./line-chart";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard page</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dicta, vitae veritatis mollitia aliquid incidunt, atque, tempore
        pariatur soluta officia modi laborum?
      </p>
      <LineChart />
    </div>
  );
}
