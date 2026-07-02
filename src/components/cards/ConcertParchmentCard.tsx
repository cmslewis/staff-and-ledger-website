import clsx from "clsx";

export type ConcertParchmentCardProps = {
	href: string;
	kicker: string;
	title: string;
	subtitle: string;
	details?: {
		label: string;
		valueLines: string[];
	}[];
	ctaLabel: string;
};

const cardClasses = clsx(
	"group",
	"relative",
	"isolate",
	"flex",
	"flex-col",
	"gap-4",
	"overflow-hidden",

	"border",
	"border-paper",
	"rounded-md",
	"bg-[radial-gradient(circle_at_14%_20%,rgb(255_255_255_/_0.45),transparent_9rem),radial-gradient(circle_at_82%_78%,rgb(105_72_38_/_0.18),transparent_12rem),repeating-linear-gradient(87deg,rgb(62_40_21_/_0.04)_0_1px,transparent_1px_7px),linear-gradient(135deg,#f4ead7_0%,#d8c09b_54%,#b99565_100%)]",
	"p-[clamp(1.35rem,2.2vw,1.85rem)]",
	"text-sand-4",

	"shadow-xl",
	"rotate-1",
	"transition-[rotate,translate,transform,box-shadow,opacity]",
	"duration-300",
	"ease-out",

	"hover:-translate-y-2",
	"hover:rotate-0",
	"hover:shadow-3xl",

	"before:pointer-events-none",
	"before:absolute",
	"before:inset-[0.7rem]",
	"before:-z-10",
	"before:border",
	"before:border-[#4b2d19]/20",
	"before:shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.2)]",
	"before:content-['']",

	"motion-reduce:rotate-0",
	"motion-reduce:transition-none",
	"motion-reduce:hover:translate-y-0",
	"motion-reduce:hover:rotate-0",
	"motion-reduce:focus-visible:translate-y-0",
	"motion-reduce:focus-visible:rotate-0",
);

const metaClasses =
	"font-mono text-[0.68rem] uppercase tracking-[0.14em] text-sand-3";

export default function ConcertParchmentCard({
	ctaLabel,
	details = [],
	href,
	kicker,
	subtitle,
	title,
}: ConcertParchmentCardProps) {
	return (
		<div className={cardClasses}>
			<span className={metaClasses}>{kicker}</span>

			<div className="flex flex-col gap-1">
				{/* Title */}
				<h1 className={clsx("mt-1", "text-4xl", "text-surface")}>{title}</h1>

				{/* Subtitle */}
				<span className={clsx("text-2xl", "italic", "text-muted")}>
					{subtitle}
				</span>
			</div>

			<span
				className="my-[0.4rem_0.25rem] h-px w-32 bg-[#3e2513]/35"
				aria-hidden="true"
			/>
			<span className="grid grid-cols-2 gap-x-[1.1rem] gap-y-[0.85rem] font-serif text-[0.86rem] leading-[1.38] max-[34rem]:grid-cols-1">
				{details.map((detail) => (
					<span key={detail.label}>
						<span className={`${metaClasses} mb-1 block`}>{detail.label}</span>
						<span>
							{detail.valueLines.map((line, index) => (
								<span key={`${detail.label}-${line}-${index}`}>
									{index > 0 && <br />}
									{line}
								</span>
							))}
						</span>
					</span>
				))}
			</span>
			<a
				className={clsx(
					metaClasses,
					"flex",
					"items-center",
					"justify-between",
					"bg-rust-2",
					"transition-[background, transform]",
					"duration-300",
					"hover:bg-rust-3",
					"hover:-translate-y-0.5",
					"p-4",
					"!text-sand-1",
					"focus-visible:!outline-sand-6",
				)}
				href={href}
			>
				{ctaLabel}
				<span aria-hidden="true">→</span>
			</a>
		</div>
	);
}
