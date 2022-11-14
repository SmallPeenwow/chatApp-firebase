import React from 'react';

const handleSubmit = async (e) => {
	e.preventDefault();

	const displayName = e.target[0].value;
	const email = e.target[1].value;
	const password = e.target[2].value;
	const file = e.target[3].files[0];

	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);

		const storageRef = ref(storage, displayName);

		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed', (snapshot) => {
			(error) => {
				setError(true);
			};

			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					await updateProfile(res.user, {
						displayName,
						photoURL: downloadURL,
					});

					await setDoc(doc(db, 'users', res.user.uid), {
						uid: res.user.uid,
						displayName,
						email,
						photoURL: downloadURL,
					});

					await setDoc(doc(db, 'userChats', res.user.uid), {});
					navigate('./');
				});
			};
		});
	} catch (error) {
		setError(true);
	}
};

const Login = () => {
	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Peen Chat</span>
				<span className='title'>Register</span>
				<form>
					<input type='email' placeholder='email' />
					<input type='password' placeholder='password' />
					<button>Sign in</button>
				</form>
				<p>You don't have an account? Register</p>
			</div>
		</div>
	);
};

export default Login;
