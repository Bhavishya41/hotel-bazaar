import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-sm border-b sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-24">
					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="sm"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className="h-6 w-6" />
					</Button>

					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div onClick={() => window.location.href = "/"} className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
							<img
								src="\lovable-uploads\IMG-20250607-WA0001.jpg"
								className="object-contain h-full w-full"
								alt="Logo"
							/>
						</div>
					</div>

					{/* Search Bar - Hidden on mobile */}
					<div className="hidden md:flex flex-1 max-w-md mx-8">
						<div className="relative w-full">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<input
								type="text"
								placeholder="Search products..."
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
							/>
						</div>
					</div>

					{/* User Actions */}
					<div className="flex items-center space-x-4">
						<Button variant="ghost" size="sm" className="hidden sm:flex">
							<Search className="h-5 w-5 md:hidden" />
							<User className="h-5 w-5 hidden md:block" />
						</Button>
						<Button onClick={() => window.location.href = "/cart"}variant="ghost" size="sm" className="relative">
							<ShoppingCart className="h-5 w-5" />
							<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
								0
							</span>
						</Button>
					</div>
				</div>

				{/* Mobile Search */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<input
								type="text"
								placeholder="Search products..."
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
							/>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
