'use client';

import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';


export const Form = () => {
	const initialState = { message: null, errors: {} };
	const [state, dispatch] = useFormState(create, initialState);
	return (
		<form action={dispatch}>
			<input
				required
				name='title'
				id='title'
				placeholder='enter a title'
				className='border black black p-1'
            />
            {state?.errors?.title ? (
                <div>
                    {state.errors.title.map((error: string) => (
                        <p key={error} className='text-rose-500'>
                            {error}
                        </p>
                    ))}
                </div>
            ): null}
			<Button type='submit'>Submit</Button>
		</form>
	);
};
