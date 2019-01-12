package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import rocks.zipcode.io.domain.enumeration.Category;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(BudgetItem.class)
public abstract class BudgetItem_ {

	public static volatile SingularAttribute<BudgetItem, Long> expectedSpending;
	public static volatile SingularAttribute<BudgetItem, String> description;
	public static volatile SingularAttribute<BudgetItem, Long> id;
	public static volatile SingularAttribute<BudgetItem, Long> actualSpending;
	public static volatile SingularAttribute<BudgetItem, Category> category;
	public static volatile SingularAttribute<BudgetItem, Budget> budget;

}

