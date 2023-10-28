<?php
/** The "Community, Tools and Knowledge" Icon Grid */

?>
<section class="community">
	<div class="container">
		<div class="row">
			<h2 class="headline mt-5 text-white">Community, Tools &amp; Knowledge</h2>
			<?php k1_get_svg_asset( 'leaves-4' ); ?>
		</div>
		<div class="row">
			<div class="col-lg-6 subheadline">Our Tools, Training & Talent deliver the expertise you need to develop a healthy ministry.</div>
		</div>
	</div>
	<div class="community__grid--container">
		<div class="container">
			<div class="community__grid">
				<?php
					$grid_items = array(
						array(
							'svg'  => 'compass',
							'text' => 'Expert Guidance with a Kingdom One Ministry Partner',
						),
						array(
							'svg'  => 'restroom',
							'text' => 'Sexual Harrassment Prevention Training',
						),
						array(
							'svg'  => 'justice',
							'text' => 'AB-506 Child Safety & Mandated Reporting Compliance Training',
						),
						array(
							'svg'  => 'git-network',
							'text' => 'HR Ministry Network Conference Online Course',
						),
						array(
							'svg'  => 'sitemap',
							'text' => 'Talent Planning &amp; Organizational Leveling',
						),
						array(
							'svg'  => 'search-dollar',
							'text' => 'Annual Compensation Survey Report',
						),
						array(
							'svg'  => 'profile',
							'text' => 'Staffing Searches',
						),
						array(
							'svg'  => 'medical',
							'text' => 'Benefits, Insurance &amp; Total Rewards',
						),
						array(
							'svg'  => 'group-add',
							'text' => 'Ministry Cohorts',
						),
						array(
							'svg'  => 'plus-circle',
							'text' => 'And so much more...',
						),
					);
					foreach ( $grid_items as $item ) {
						$markup  = "<div class='community__grid--item'><div class='community__grid-item-content'>";
						$markup .= k1_get_svg_asset( 'front-page-icon-' . $item['svg'], false, false );
						$markup .= "<p class='community__grid-item-content--text'>{$item['text']}</p>";
						$markup .= '</div></div>';
						echo $markup;
					}
					?>

			</div>
		</div>
	</div>
</section>