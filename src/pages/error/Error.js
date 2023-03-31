import './error.scss'
import Header from "../../components/header/Header";

// what the fuck are you doing ?

export default function NotFound() {
	return (
		<div className='notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
		</div>
	)
}