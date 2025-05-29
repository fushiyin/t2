import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { Phone } from "lucide-react";

export default function CallPhoneButton({ phoneNumber, show = true }) {
	return (
		<Button
			asChild
			type="button"
			className={classNames(
				"size-[56px] fixed bottom-[100px] right-[30px] cursor-pointer rounded-3xl bg-green-500 shadow-[0px_2px_4px_0px_#0000001F,_0px_4px_8px_0px_#00000014] transition-opacity duration-300 z-50 block md:hidden",
				{
					"opacity-100": show,
					"opacity-0 pointer-events-none": !show,
				},
			)}
		>
			<a
				className="flex"
				href={`tel:${phoneNumber}`}
			>
				<Phone
					size={24}
					color="white"
					strokeWidth={2}
				/>
			</a>
		</Button>
	);
}
