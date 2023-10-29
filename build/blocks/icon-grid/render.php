<?php
/** The "Community, Tools and Knowledge" Icon Grid
 *
 * @package KingdomOne
 */

?>
<section class="community">
	<div class="container">
		<div class="row">
			<h2 class="headline mt-5 text-white">Community, Tools &amp; Knowledge</h2>
			<?php k1_the_leaf( 4, 'var(--wp--preset--color--primary)', 'right' ); ?>
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
							'svg'   => 'hr',
							'title' => 'HR',
							'text'  => array( 'Staffing', 'Handbooks', 'Payroll', 'Ministry Cohorts' ),
						),
						array(
							'svg'   => 'finance',
							'title' => 'Finance',
							'text'  => array( 'Financial Reporting', 'Reconciliation', 'Expense Tracking' ),
						),
						array(
							'svg'   => 'marcom',
							'title' => 'Marcom',
							'text'  => array( 'Grapghic Design', 'Branding', 'Social Media Strategy', 'Video Editing' ),
						),
						array(
							'svg'   => 'webDev',
							'title' => 'Web Development',
							'text'  => array( 'Storybranding', 'Customer Journey', 'Wireframing', 'Web Design & Development' ),
						),
						array(
							'svg'   => 'strategy',
							'title' => 'Strategy',
							'text'  => array( 'Staff Leveling', 'Communications Frameworks', 'Coaching, Advisory, Strategic Planning' ),
						),
						array(
							'svg'   => 'staffing',
							'title' => 'Business Administration',
							'text'  => array( 'ChMS Implementation & Optimization', 'Audit & 990 Support', 'Business Process & Procedure Optimization' ),
						),
						array(
							'svg'   => 'spark',
							'title' => 'Spark',
							'text'  => array( 'Compensation Reporting', 'Benefits', 'Staffing Searches' ),
						),
						array(
							'svg'   => 'academy',
							'title' => 'Academy',
							'text'  => array( 'Trainings', 'Tutorials', 'Templates', 'Tools' ),
						),
						array(
							'svg'   => 'justice',
							'title' => 'Above Reproach',
							'text'  => array( 'AB-506 Child Safety Training', 'Harrassment Prevention Training', 'Legal Updates' ),
						),
					);
					foreach ( $grid_items as $item ) {
						$markup  = "<div class='community__grid--item text-center'><div class='community__grid-item-content'>";
						$markup .= get_the_k1_icon( $item['svg'] );
						$markup .= "<h3 class='community__grid__label'>{$item['title']}</h3>";
						$markup .= "<ul class='community__grid--list list-unstyled text-center'>";
						foreach ( $item['text'] as $list_item ) {
							$markup .= "<li class='community__grid--list-item'>{$list_item}</li>";
						}
						$markup .= '</ul>';
						$markup .= '</div></div>';
						echo $markup;
					}
					?>

			</div>
		</div>
	</div>
</section>