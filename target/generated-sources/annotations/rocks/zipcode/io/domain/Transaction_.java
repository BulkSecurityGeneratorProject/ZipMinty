package rocks.zipcode.io.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import rocks.zipcode.io.domain.enumeration.Category;
import rocks.zipcode.io.domain.enumeration.TransactionType;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Transaction.class)
public abstract class Transaction_ {

	public static volatile SingularAttribute<Transaction, TransactionType> transactionType;
	public static volatile SingularAttribute<Transaction, LocalDate> dateTime;
	public static volatile SingularAttribute<Transaction, String> accountId;
	public static volatile SingularAttribute<Transaction, Long> amount;
	public static volatile SingularAttribute<Transaction, String> descriptionID;
	public static volatile SingularAttribute<Transaction, MoneyAccount> moneyAccount;
	public static volatile SingularAttribute<Transaction, String> memo;
	public static volatile SingularAttribute<Transaction, Long> id;
	public static volatile SingularAttribute<Transaction, Category> category;

}

