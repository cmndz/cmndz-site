import ListIcon from "./../molecules/ListIcon";

export default function ListListIcon({ list_listicon }) {
	let _aux = list_listicon.map(function (item, index) {
		return <ListIcon key={index} type_icon={item.type_icon} text={item.text} />;
	});

	return <>{_aux}</>;
}
